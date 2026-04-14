import type { Metadata, Viewport } from "next";

import { registerLicense } from "@syncfusion/ej2-base";
import "@syncfusion/ej2-base/styles/tailwind3.css";
import "@syncfusion/ej2-react-buttons/styles/tailwind3.css";
import "@syncfusion/ej2-react-calendars/styles/tailwind3.css";
import "@syncfusion/ej2-react-dropdowns/styles/tailwind3.css";
import "@syncfusion/ej2-react-grids/styles/tailwind3.css";
import "@syncfusion/ej2-react-inputs/styles/tailwind3.css";
import "@syncfusion/ej2-react-navigations/styles/tailwind3.css";
import "@syncfusion/ej2-react-popups/styles/tailwind3.css";
import "@syncfusion/ej2-react-splitbuttons/styles/tailwind3.css";
import { FC, PropsWithChildren, ReactElement } from "react";
import "react-tabs/style/react-tabs.css";
import "sweetalert2/dist/sweetalert2.min.css";

import { APIConnectionChecker, ViewportWarning } from "../components";
import { NextAuthProvider, NextThemesProvider, ReactQueryProvider } from "../libs";
import { geistMono, geistSans, inter, roboto } from "./fonts";
import "./globals.css";

const SYNCFUSION_LICENSE = process.env.NEXT_PUBLIC_SYNCFUSION_LICENSE_KEY;

if (!SYNCFUSION_LICENSE) {
  throw new Error("The Syncfusion license key is not defined. Please check your environment variables.");
}

registerLicense(SYNCFUSION_LICENSE);

export const viewport: Viewport = {
  initialScale: 0.5,
  width: "device-width",
};

export const metadata: Metadata = {
  authors: [{ name: "Gede Dewo Wahyu M.W", url: "https://github.com/gdwmw" }],
  category: "Boilerplate",
  creator: "Gede Dewo Wahyu M.W",
  publisher: "Gede Dewo Wahyu M.W",
  referrer: "strict-origin-when-cross-origin",
  title: {
    default: "Next.js | Home",
    template: "Next.js | %s",
  },
};

type T = Readonly<PropsWithChildren>;

const RootLayout: FC<T> = (props): ReactElement => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${roboto.variable} font-inter bg-gray-100 antialiased dark:bg-gray-900`}
      id="dialog-target"
    >
      <NextThemesProvider>
        <ReactQueryProvider>
          <NextAuthProvider>
            <ViewportWarning />
            {props.children}
            {(process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_DEBUG_MODE === "true") && <APIConnectionChecker />}
          </NextAuthProvider>
        </ReactQueryProvider>
      </NextThemesProvider>
    </body>
  </html>
);

export default RootLayout;
