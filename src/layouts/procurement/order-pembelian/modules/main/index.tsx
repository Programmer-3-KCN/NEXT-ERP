"use client";

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Resize, Sort } from "@syncfusion/ej2-react-grids";
import { ChevronDown, ChevronRight, FileText } from "lucide-react";
import { FC, ReactElement } from "react";

import { useFilterLayoutContext } from "@/src/components";

type TOrderPembelianRow = {
  beratKg: number;
  biayaPengiriman: null | number;
  estimasiPengiriman: Date;
  nettoMU: number;
  nomorPO: string;
  pajak: string;
  statusApproval: string;
  statusDokumen: string;
  supplier: string;
  tanggal: Date;
  tanggalBerlaku: Date;
  termin: string;
};

const orderPembelianData: TOrderPembelianRow[] = [
  {
    beratKg: 4900,
    biayaPengiriman: null,
    estimasiPengiriman: new Date("2021-05-31"),
    nettoMU: 77625000,
    nomorPO: "2102.0910.00022",
    pajak: "Tanpa Pajak",
    statusApproval: "Disetujui",
    statusDokumen: "Tertutup",
    supplier: "KENCANA PUSAT",
    tanggal: new Date("2021-05-24"),
    tanggalBerlaku: new Date("2021-05-31"),
    termin: "Net 1",
  },
  {
    beratKg: 11790,
    biayaPengiriman: null,
    estimasiPengiriman: new Date("2021-06-09"),
    nettoMU: 136626050,
    nomorPO: "2102.0910.00023",
    pajak: "Tanpa Pajak",
    statusApproval: "Disetujui",
    statusDokumen: "Tertutup",
    supplier: "KENCANA PUSAT",
    tanggal: new Date("2021-05-24"),
    tanggalBerlaku: new Date("2021-05-31"),
    termin: "Net 1",
  },
  {
    beratKg: 18850,
    biayaPengiriman: null,
    estimasiPengiriman: new Date("2021-06-03"),
    nettoMU: 49049000,
    nomorPO: "2102.0910.00025",
    pajak: "Tanpa Pajak",
    statusApproval: "Disetujui",
    statusDokumen: "Tertutup",
    supplier: "KENCANA PUSAT",
    tanggal: new Date("2021-05-27"),
    tanggalBerlaku: new Date("2021-05-30"),
    termin: "Net 1",
  },
  {
    beratKg: 30500,
    biayaPengiriman: null,
    estimasiPengiriman: new Date("2021-06-03"),
    nettoMU: 76440000,
    nomorPO: "2102.0910.00026",
    pajak: "Tanpa Pajak",
    statusApproval: "Disetujui",
    statusDokumen: "Tertutup",
    supplier: "KENCANA PUSAT",
    tanggal: new Date("2021-05-27"),
    tanggalBerlaku: new Date("2021-06-03"),
    termin: "Net 1",
  },
  {
    beratKg: 7475,
    biayaPengiriman: null,
    estimasiPengiriman: new Date("2021-06-02"),
    nettoMU: 156875000,
    nomorPO: "2102.0910.00029",
    pajak: "Tanpa Pajak",
    statusApproval: "Disetujui",
    statusDokumen: "Tertutup",
    supplier: "KENCANA PUSAT",
    tanggal: new Date("2021-05-28"),
    tanggalBerlaku: new Date("2021-06-04"),
    termin: "Net 1",
  },
  {
    beratKg: 8200,
    biayaPengiriman: null,
    estimasiPengiriman: new Date("2021-06-02"),
    nettoMU: 187600000,
    nomorPO: "2102.0910.00030",
    pajak: "Tanpa Pajak",
    statusApproval: "Disetujui",
    statusDokumen: "Tertutup",
    supplier: "KENCANA PUSAT",
    tanggal: new Date("2021-05-28"),
    tanggalBerlaku: new Date("2021-06-04"),
    termin: "Net 1",
  },
  {
    beratKg: 20150,
    biayaPengiriman: null,
    estimasiPengiriman: new Date("2021-06-07"),
    nettoMU: 53824900,
    nomorPO: "2102.0910.00031",
    pajak: "Tanpa Pajak",
    statusApproval: "Disetujui",
    statusDokumen: "Tertutup",
    supplier: "KENCANA PUSAT",
    tanggal: new Date("2021-05-28"),
    tanggalBerlaku: new Date("2021-06-04"),
    termin: "Net 1",
  },
];

export const Main: FC = (): ReactElement => {
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
        <button
          className="flex cursor-pointer items-center rounded-sm px-2 py-1 text-left text-sm whitespace-nowrap transition duration-100 hover:bg-blue-50 hover:text-blue-600 active:scale-95"
          onClick={() => setIsFilterOpen((prev) => !prev)}
        >
          Filter
        </button>
        <button className="flex cursor-pointer items-center rounded-sm px-2 py-1 text-left text-sm whitespace-nowrap transition duration-100 hover:bg-blue-50 hover:text-blue-600 active:scale-95">
          Baru
        </button>
        <button className="flex cursor-pointer items-center rounded-sm px-2 py-1 text-left text-sm whitespace-nowrap transition duration-100 hover:bg-blue-50 hover:text-blue-600 active:scale-95">
          Ubah
        </button>
        <button className="flex cursor-pointer items-center rounded-sm px-2 py-1 text-left text-sm whitespace-nowrap text-green-600 transition duration-100 hover:bg-green-50 active:scale-95">
          <ChevronRight size={14} /> Approval
        </button>
        <button className="flex cursor-pointer items-center rounded-sm px-2 py-1 text-left text-sm whitespace-nowrap text-red-600 transition duration-100 hover:bg-red-50 active:scale-95">
          <ChevronRight size={14} /> Pembatalan
        </button>
        <button className="flex cursor-pointer items-center rounded-sm px-2 py-1 text-left text-sm whitespace-nowrap text-blue-600 transition duration-100 hover:bg-blue-50 active:scale-95">
          <ChevronRight size={14} /> Update File
        </button>
        <button className="flex cursor-pointer items-center gap-0.5 rounded-sm px-2 py-1 text-left text-sm whitespace-nowrap text-green-600 transition duration-100 hover:bg-green-50 active:scale-95">
          <FileText size={14} />
          Acc. DIREKSI
        </button>
        <button className="flex cursor-pointer items-center rounded-sm px-2 py-1 text-left text-sm whitespace-nowrap transition duration-100 hover:bg-blue-50 hover:text-blue-600 active:scale-95">
          Cetak
        </button>
        <button className="flex cursor-pointer items-center rounded-sm px-2 py-1 text-left text-sm whitespace-nowrap transition duration-100 hover:bg-blue-50 hover:text-blue-600 active:scale-95">
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
          dataSource={orderPembelianData}
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
    </>
  );
};
