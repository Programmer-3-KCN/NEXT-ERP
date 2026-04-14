"use client";

import { FC, ReactElement, useEffect, useRef } from "react";
import Swal from "sweetalert2";

const MIN_HEIGHT = 700;
const MIN_WIDTH = 1440;
const IGNORE_KEY = "viewport-warning-ignore-until";
const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;

export const ViewportWarning: FC = (): null | ReactElement => {
  const hasShownRef = useRef(false);

  useEffect(() => {
    const isIgnored = () => {
      const ignoreUntil = window.localStorage.getItem(IGNORE_KEY);
      return Boolean(ignoreUntil && Number(ignoreUntil) > Date.now());
    };

    const saveIgnorePreference = () => {
      const checkbox = document.getElementById("ignore-viewport-warning") as HTMLInputElement | null;

      if (checkbox?.checked) {
        window.localStorage.setItem(IGNORE_KEY, String(Date.now() + ONE_MONTH_MS));
      }
    };

    const handleCheckViewport = () => {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      const isBelowRecommendedViewport = currentWidth < MIN_WIDTH || currentHeight < MIN_HEIGHT;

      if (isIgnored()) {
        hasShownRef.current = false;

        if (Swal.isVisible()) {
          Swal.close();
        }

        return;
      }

      const warningHtml =
        "<p>Untuk tampilan yang optimal, gunakan resolusi minimal <strong>" +
        MIN_WIDTH +
        "x" +
        MIN_HEIGHT +
        "</strong> atau silakan <strong>Zoom Out</strong> browser Anda.</p>" +
        '<p style="margin-top: 8px;">Tekan <kbd style="padding:2px 6px;border:1px solid #ccc;border-radius:4px;font-size:0.85em;">Ctrl</kbd> + <kbd style="padding:2px 6px;border:1px solid #ccc;border-radius:4px;font-size:0.85em;">−</kbd> untuk zoom out.</p>' +
        '<p style="margin-top: 8px;">Ukuran saat ini: <strong>' +
        currentWidth +
        "x" +
        currentHeight +
        "</strong></p>" +
        '<label style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:12px;">' +
        '<input id="ignore-viewport-warning" type="checkbox" />' +
        "<span>Tangguhkan peringatan ini selama 1 bulan.</span>" +
        "</label>";

      if (isBelowRecommendedViewport && !hasShownRef.current && !Swal.isVisible()) {
        hasShownRef.current = true;

        void Swal.fire({
          allowEscapeKey: true,
          allowOutsideClick: true,
          confirmButtonText: "OK",
          html: warningHtml,
          icon: "warning",
          timer: 10000,
          timerProgressBar: true,
          title: "Tampilan Belum Optimal",
          width: "600px",
          willClose: saveIgnorePreference,
        }).finally(() => {
          hasShownRef.current = false;
        });
      }

      if (isBelowRecommendedViewport && Swal.isVisible()) {
        Swal.update({
          html: warningHtml,
        });
      }

      if (!isBelowRecommendedViewport) {
        hasShownRef.current = false;

        if (Swal.isVisible()) {
          Swal.close();
        }
      }
    };

    handleCheckViewport();
    window.addEventListener("resize", handleCheckViewport);

    return () => window.removeEventListener("resize", handleCheckViewport);
  }, []);

  return null;
};
