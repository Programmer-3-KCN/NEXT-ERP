"use client";

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Resize, Sort } from "@syncfusion/ej2-react-grids";
import { ChevronDown, ChevronRight, Ellipsis, FileText } from "lucide-react";
import { FC, ReactElement, useEffect, useRef, useState } from "react";

import { Button, ButtonTWM, useFilterLayoutContext } from "@/src/components";
import { ORDER_PEMBELIAN_DATA } from "@/src/libs";

import { useLocalContext } from "../../context";
import { Baru, JenisBarang, JenisTrasaksi } from "./batches";

const PRINT_OPTION_DATA = [
  "Form Surat Order Pembelian Dengan Harga - (PKP)",
  "Form Surat Order Pembelian Dengan Harga - (NON PKP)",
  "Form Surat Order Pembelian",
  "Form PO Barang Produksi (Model 1) - (PKP)",
  "Form PO Barang Produksi (Model 2) - (PKP)",
  "Form PO Barang Produksi (Model 3) - (NON PKP)",
  "Form PO Barang Produksi (Model 4) - (PKP)",
  "Form PraPP Barang Produksi (Model 2) - (PKP)",
  "Form PraPP Barang Produksi (Model 3) - (NON PKP)",
  "Form PraPP Barang Produksi (Model 4) - (PKP)",
  "Daftar Surat Order Pembelian",
];

export const Main: FC = (): ReactElement => {
  const { setModal } = useLocalContext();
  const { setIsFilterOpen } = useFilterLayoutContext();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isDesktopPrintMenuOpen, setIsDesktopPrintMenuOpen] = useState(false);
  const [isMorePrintMenuOpen, setIsMorePrintMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement | null>(null);
  const printMenuRef = useRef<HTMLDivElement | null>(null);
  const morePrintMenuRef = useRef<HTMLDivElement | null>(null);

  const pageSettings = { pageSize: 50, pageSizes: [10, 20, 50, 100, "All"] };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (!(event.target instanceof Node)) {
        return;
      }

      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setIsMoreMenuOpen(false);
        setIsMorePrintMenuOpen(false);
      }

      if (printMenuRef.current && !printMenuRef.current.contains(event.target)) {
        setIsDesktopPrintMenuOpen(false);
      }

      if (morePrintMenuRef.current && !morePrintMenuRef.current.contains(event.target)) {
        setIsMorePrintMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <style>
        {`
          #grid .e-gridheader .e-headercell {
            background-color: oklch(87.2% 0.01 258.338);
            
          }
        `}
      </style>

      <div className="flex flex-wrap items-center gap-1 px-2 py-1">
        <Button color="black-blue" onClick={() => setIsFilterOpen((prev) => !prev)} size="sm" variant="ghost">
          Filter
        </Button>
        <Button color="black-blue" onClick={() => setModal((prev) => ({ ...prev, jenisTransaksi: true }))} size="sm" variant="ghost">
          Baru
        </Button>
        <Button color="black-blue" size="sm" variant="ghost">
          Ubah
        </Button>
        <Button className="gap-0" color="green" size="sm" variant="ghost">
          <ChevronRight size={14} /> Approval
        </Button>
        <Button className="gap-0" color="red" size="sm" variant="ghost">
          <ChevronRight size={14} /> Pembatalan
        </Button>

        <div className="relative min-[1091px]:hidden" ref={moreMenuRef}>
          <Button
            aria-expanded={isMoreMenuOpen}
            aria-label={isMoreMenuOpen ? "Close more actions menu" : "Open more actions menu"}
            className="min-w-0 px-2"
            color="black-blue"
            onClick={() => setIsMoreMenuOpen((prev) => !prev)}
            size="sm"
            variant="ghost"
          >
            <Ellipsis size={18} />
          </Button>

          {isMoreMenuOpen ? (
            <div className="absolute top-full left-0 z-20 mt-1 min-w-44 rounded-md border bg-white p-1 shadow-lg">
              <div className="flex flex-col gap-1">
                <Button className="justify-start gap-0" color="blue" size="sm" variant="ghost">
                  <ChevronRight size={14} /> Update File
                </Button>

                <Button color="green" size="sm" variant="ghost">
                  <FileText size={14} />
                  Acc. DIREKSI
                </Button>

                <div className="relative" ref={morePrintMenuRef}>
                  <div className={ButtonTWM({ className: "w-full gap-0.5 active:scale-100", color: "black-blue", size: "sm", variant: "ghost" })}>
                    <button className="cursor-pointer active:scale-95">Cetak</button>
                    <button
                      aria-expanded={isMorePrintMenuOpen}
                      className="cursor-pointer active:scale-95"
                      onClick={() => setIsMorePrintMenuOpen((prev) => !prev)}
                    >
                      <ChevronDown
                        className={isMorePrintMenuOpen ? "rotate-180 transition-transform duration-100" : "transition-transform duration-100"}
                        size={14}
                      />
                    </button>
                  </div>

                  {isMorePrintMenuOpen ? (
                    <div className="absolute top-0 right-full z-30 max-w-87.5 overflow-hidden rounded-md border bg-white p-1 shadow-lg">
                      <div className="overflow-auto">
                        <div className="flex w-fit flex-col gap-1">
                          {PRINT_OPTION_DATA.map((item) => (
                            <Button color="black-blue" key={item} onClick={() => setIsMorePrintMenuOpen(false)} size="sm" variant="ghost">
                              {item}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>

                <Button color="black-blue" size="sm" variant="ghost">
                  Detail Dok
                </Button>
              </div>
            </div>
          ) : null}
        </div>

        <Button className="gap-0 max-[1090px]:hidden" color="blue" size="sm" variant="ghost">
          <ChevronRight size={14} /> Update File
        </Button>

        <Button className="max-[1090px]:hidden" color="green" size="sm" variant="ghost">
          <FileText size={14} />
          Acc. DIREKSI
        </Button>

        <div className="relative max-[1090px]:hidden" ref={printMenuRef}>
          <div className={ButtonTWM({ className: "gap-0.5 active:scale-100", color: "black-blue", size: "sm", variant: "ghost" })}>
            <button className="cursor-pointer active:scale-95">Cetak</button>
            <button
              aria-expanded={isDesktopPrintMenuOpen}
              className="cursor-pointer active:scale-95"
              onClick={() => setIsDesktopPrintMenuOpen((prev) => !prev)}
            >
              <ChevronDown
                className={isDesktopPrintMenuOpen ? "rotate-180 transition-transform duration-100" : "transition-transform duration-100"}
                size={14}
              />
            </button>
          </div>

          {isDesktopPrintMenuOpen ? (
            <div className="absolute top-full right-0 z-20 mt-1 min-w-52 rounded-md border bg-white p-1 shadow-lg">
              <div className="flex flex-col gap-1">
                {PRINT_OPTION_DATA.map((item) => (
                  <Button color="black-blue" key={item} onClick={() => setIsDesktopPrintMenuOpen(false)} size="sm" variant="ghost">
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <Button className="max-[1090px]:hidden" color="black-blue" size="sm" variant="ghost">
          Detail Dok
        </Button>
      </div>

      <div className="flex-1 overflow-hidden px-2 pb-2">
        <GridComponent
          allowPaging={true}
          allowResizing={true}
          allowSorting={true}
          autoFit={true}
          clipMode="EllipsisWithTooltip"
          dataSource={ORDER_PEMBELIAN_DATA}
          gridLines="Both"
          height={"100%"}
          id="grid"
          pageSettings={pageSettings}
          rowHeight={22}
          width="100%"
        >
          <ColumnsDirective>
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="nomorPO"
              headerText="No. PO"
              headerTextAlign="Center"
              textAlign="Left"
              width="150"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="tanggal"
              format="dd-MM-yyyy"
              headerText="Tanggal"
              headerTextAlign="Center"
              textAlign="Center"
              type="date"
              width="120"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="tanggalBerlaku"
              format="dd-MM-yyyy"
              headerText="Tgl. Berlaku"
              headerTextAlign="Center"
              textAlign="Center"
              type="date"
              width="130"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="estimasiPengiriman"
              format="dd-MM-yyyy"
              headerText="Est. Pengiriman"
              headerTextAlign="Center"
              textAlign="Center"
              type="date"
              width="150"
            />
            <ColumnDirective clipMode="EllipsisWithTooltip" field="supplier" headerText="Supplier" headerTextAlign="Center" width="220" />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="termin"
              headerText="Termin"
              headerTextAlign="Center"
              textAlign="Center"
              width="110"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="biayaPengiriman"
              format={"N0"}
              headerText="Biaya Pengiriman"
              headerTextAlign="Center"
              textAlign="Right"
              width="150"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="nettoMU"
              format={"N0"}
              headerText="Netto (MU)"
              headerTextAlign="Center"
              textAlign="Right"
              width="130"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="pajak"
              headerText="Pajak"
              headerTextAlign="Center"
              textAlign="Center"
              width="110"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="beratKg"
              format={"N0"}
              headerText="Berat (Kg)"
              headerTextAlign="Center"
              textAlign="Right"
              width="120"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="statusDokumen"
              headerText="Status Dok."
              headerTextAlign="Center"
              textAlign="Center"
              width="120"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="statusApproval"
              headerText="Status Approval"
              headerTextAlign="Center"
              textAlign="Center"
              width="140"
            />
          </ColumnsDirective>

          <Inject services={[Page, Sort, Resize]} />
        </GridComponent>
      </div>

      <JenisTrasaksi />
      <JenisBarang />
      <Baru />
    </>
  );
};
