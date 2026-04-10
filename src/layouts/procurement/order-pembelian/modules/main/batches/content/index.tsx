"use client";

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Resize, Sort } from "@syncfusion/ej2-react-grids";
import { FC, ReactElement } from "react";

type TOrderPembelianRow = {
  beratKg: number;
  biayaPengiriman: number;
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
    beratKg: 1250.5,
    biayaPengiriman: 1500000,
    estimasiPengiriman: new Date("2026-04-16"),
    nettoMU: 24500000,
    nomorPO: "PO-240401",
    pajak: "PPN 11%",
    statusApproval: "Approved",
    statusDokumen: "Open",
    supplier: "PT Baja Konstruksi Nusantara",
    tanggal: new Date("2026-04-10"),
    tanggalBerlaku: new Date("2026-04-30"),
    termin: "30 Hari",
  },
  {
    beratKg: 780,
    biayaPengiriman: 950000,
    estimasiPengiriman: new Date("2026-04-18"),
    nettoMU: 18250000,
    nomorPO: "PO-240402",
    pajak: "PPN 11%",
    statusApproval: "Pending",
    statusDokumen: "Release",
    supplier: "CV Sumber Material Teknik",
    tanggal: new Date("2026-04-11"),
    tanggalBerlaku: new Date("2026-05-02"),
    termin: "14 Hari",
  },
  {
    beratKg: 560.25,
    biayaPengiriman: 675000,
    estimasiPengiriman: new Date("2026-04-20"),
    nettoMU: 12780000,
    nomorPO: "PO-240403",
    pajak: "Non Pajak",
    statusApproval: "Approved",
    statusDokumen: "Close",
    supplier: "PT Anugerah Logam Persada",
    tanggal: new Date("2026-04-12"),
    tanggalBerlaku: new Date("2026-05-05"),
    termin: "COD",
  },
  {
    beratKg: 910.75,
    biayaPengiriman: 1125000,
    estimasiPengiriman: new Date("2026-04-22"),
    nettoMU: 21990000,
    nomorPO: "PO-240404",
    pajak: "PPN 11%",
    statusApproval: "Revision",
    statusDokumen: "Draft",
    supplier: "PT Multi Artha Supplier",
    tanggal: new Date("2026-04-13"),
    tanggalBerlaku: new Date("2026-05-06"),
    termin: "21 Hari",
  },
  {
    beratKg: 430,
    biayaPengiriman: 540000,
    estimasiPengiriman: new Date("2026-04-25"),
    nettoMU: 9850000,
    nomorPO: "PO-240405",
    pajak: "PPN 11%",
    statusApproval: "Approved",
    statusDokumen: "Open",
    supplier: "UD Mitra Karya Mandiri",
    tanggal: new Date("2026-04-14"),
    tanggalBerlaku: new Date("2026-05-08"),
    termin: "7 Hari",
  },
];

export const Content: FC = (): ReactElement => {
  const pageSettings = { pageSize: 8 };

  return (
    <section className="flex h-full flex-1 flex-col overflow-hidden rounded-md border border-gray-300 bg-white p-2">
      <div className="flex flex-1 flex-col gap-1 overflow-y-auto">
        <h2 className="text-lg font-semibold text-gray-900">Order Pembelian (PO)</h2>

        <div className="flex-1 overflow-hidden rounded-md border border-gray-200">
          <GridComponent
            allowPaging={true}
            allowResizing={true}
            allowSorting={true}
            clipMode="EllipsisWithTooltip"
            dataSource={orderPembelianData}
            height={"100%"}
            pageSettings={pageSettings}
            width="100%"
          >
            <ColumnsDirective>
              <ColumnDirective clipMode="EllipsisWithTooltip" field="nomorPO" headerText="No. PO" width="120" />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="tanggal" format="dd/MM/yyyy" headerText="Tanggal" type="date" width="120" />
              <ColumnDirective
                clipMode="EllipsisWithTooltip"
                field="tanggalBerlaku"
                format="dd/MM/yyyy"
                headerText="Tgl. Berlaku"
                type="date"
                width="130"
              />
              <ColumnDirective
                clipMode="EllipsisWithTooltip"
                field="estimasiPengiriman"
                format="dd/MM/yyyy"
                headerText="Est. Pengiriman"
                type="date"
                width="150"
              />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="supplier" headerText="Supplier" width="220" />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="termin" headerText="Termin" textAlign="Center" width="110" />
              <ColumnDirective
                clipMode="EllipsisWithTooltip"
                field="biayaPengiriman"
                format="N2"
                headerText="Biaya Pengiriman"
                textAlign="Right"
                width="150"
              />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="nettoMU" format="N2" headerText="Netto (MU)" textAlign="Right" width="130" />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="pajak" headerText="Pajak" textAlign="Center" width="110" />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="beratKg" format="N2" headerText="Berat (Kg)" textAlign="Right" width="120" />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="statusDokumen" headerText="Status Dok." width="120" />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="statusApproval" headerText="Status Approval" width="140" />
            </ColumnsDirective>

            <Inject services={[Page, Sort, Resize]} />
          </GridComponent>
        </div>
      </div>
    </section>
  );
};
