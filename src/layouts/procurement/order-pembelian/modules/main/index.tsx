"use client";

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Resize, Sort } from "@syncfusion/ej2-react-grids";
import { ChevronDown, ChevronRight, FileText } from "lucide-react";
import { FC, ReactElement } from "react";

import { ButtonTWM, useFilterLayoutContext } from "@/src/components";
import { ORDER_PEMBELIAN_DATA } from "@/src/libs";

import { useLocalContext } from "../../context";
import { JenisBarang, JenisTrasaksi } from "./batches";

export const Main: FC = (): ReactElement => {
  const { setModal } = useLocalContext();
  const { setIsFilterOpen } = useFilterLayoutContext();

  const pageSettings = { pageSize: 50, pageSizes: [10, 20, 50, 100, "All"] };

  return (
    <>
      <style>
        {`
          #grid .e-gridheader .e-headercell {
            background-color: oklch(87.2% 0.01 258.338);
            
          }
        `}
      </style>

      <div className="flex items-center gap-1 px-2 py-1">
        <button className={ButtonTWM({ color: "black-blue", size: "sm", variant: "ghost" })} onClick={() => setIsFilterOpen((prev) => !prev)}>
          Filter
        </button>
        <button
          className={ButtonTWM({ color: "black-blue", size: "sm", variant: "ghost" })}
          onClick={() => setModal((prev) => ({ ...prev, jenisTransaksi: true }))}
        >
          Baru
        </button>
        <button className={ButtonTWM({ color: "black-blue", size: "sm", variant: "ghost" })}>Ubah</button>
        <button className={ButtonTWM({ className: "gap-0", color: "green", size: "sm", variant: "ghost" })}>
          <ChevronRight size={14} /> Approval
        </button>
        <button className={ButtonTWM({ className: "gap-0", color: "red", size: "sm", variant: "ghost" })}>
          <ChevronRight size={14} /> Pembatalan
        </button>
        <button className={ButtonTWM({ className: "gap-0", color: "blue", size: "sm", variant: "ghost" })}>
          <ChevronRight size={14} /> Update File
        </button>
        <button className={ButtonTWM({ color: "green", size: "sm", variant: "ghost" })}>
          <FileText size={14} />
          Acc. DIREKSI
        </button>
        <button className={ButtonTWM({ color: "black-blue", size: "sm", variant: "ghost" })}>Cetak</button>
        <button className={ButtonTWM({ color: "black-blue", size: "sm", variant: "ghost" })}>
          <ChevronDown size={14} /> Detail Dok
        </button>
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
              textAlign="Center"
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
              headerText="Biaya Pengiriman"
              headerTextAlign="Center"
              textAlign="Right"
              width="150"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="nettoMU"
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
    </>
  );
};
