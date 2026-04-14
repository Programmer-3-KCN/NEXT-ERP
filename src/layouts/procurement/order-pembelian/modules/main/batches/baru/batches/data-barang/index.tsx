import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Resize, Sort } from "@syncfusion/ej2-react-grids";
import { FC, ReactElement } from "react";

export const DataBarang: FC = (): ReactElement => {
  const pageSettings = { pageSize: 50, pageSizes: [10, 20, 50, 100, "All"] };

  return (
    <div className="flex h-full flex-1 flex-col gap-1 overflow-hidden">
      <div className="min-h-0 flex-1 overflow-hidden">
        <GridComponent
          allowPaging={true}
          allowResizing={true}
          allowSorting={true}
          autoFit={true}
          clipMode="EllipsisWithTooltip"
          dataSource={[{}]}
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
              field="poGrup"
              headerText="PO Grup"
              headerTextAlign="Center"
              textAlign="Center"
              width="90"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="ppnAtasNama"
              headerText="PPN Atas Nama (Opsional)"
              headerTextAlign="Center"
              textAlign="Center"
              width="180"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="noSpp"
              headerText="No. SPP"
              headerTextAlign="Center"
              textAlign="Center"
              width="100"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="noBarang"
              headerText="No. Barang"
              headerTextAlign="Center"
              textAlign="Left"
              width="110"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="namaBarang"
              headerText="Nama Barang"
              headerTextAlign="Center"
              textAlign="Left"
              width="180"
            />
            <ColumnDirective
              columns={[
                {
                  clipMode: "EllipsisWithTooltip",
                  field: "estimasiKuantitasKg",
                  format: "N0",
                  headerText: "Kuantitas (Kg)",
                  headerTextAlign: "Center",
                  textAlign: "Right",
                  width: "120",
                },
                {
                  clipMode: "EllipsisWithTooltip",
                  field: "diameter",
                  headerText: "Diameter",
                  headerTextAlign: "Center",
                  textAlign: "Center",
                  width: "90",
                },
                {
                  clipMode: "EllipsisWithTooltip",
                  field: "jarakCm",
                  headerText: "Jarak/Cm",
                  headerTextAlign: "Center",
                  textAlign: "Center",
                  width: "90",
                },
                {
                  clipMode: "EllipsisWithTooltip",
                  field: "kgPerRoll",
                  format: "N0",
                  headerText: "Kg/Btg",
                  headerTextAlign: "Center",
                  textAlign: "Right",
                  width: "90",
                },
                {
                  clipMode: "EllipsisWithTooltip",
                  field: "hargaPerKg",
                  format: "N0",
                  headerText: "Harga/Kg",
                  headerTextAlign: "Center",
                  textAlign: "Right",
                  width: "100",
                },
                {
                  clipMode: "EllipsisWithTooltip",
                  field: "estimasiKuantitasBtg",
                  format: "N0",
                  headerText: "Kuantitas (Btg)",
                  headerTextAlign: "Center",
                  textAlign: "Right",
                  width: "130",
                },
                {
                  clipMode: "EllipsisWithTooltip",
                  field: "hargaPerBtg",
                  format: "N0",
                  headerText: "Harga/Btg",
                  headerTextAlign: "Center",
                  textAlign: "Right",
                  width: "100",
                },
              ]}
              headerText="Estimasi Produksi"
              textAlign="Center"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="satuan"
              headerText="Satuan"
              headerTextAlign="Center"
              textAlign="Center"
              width="90"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="kuantitas"
              format={"N0"}
              headerText="Kuantitas"
              headerTextAlign="Center"
              textAlign="Right"
              width="100"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="harga"
              format={"N0"}
              headerText="Harga"
              headerTextAlign="Center"
              textAlign="Right"
              width="100"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="diskonPersen"
              format={"N0"}
              headerText="Diskon (%)"
              headerTextAlign="Center"
              textAlign="Right"
              width="100"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="potongan"
              format={"N0"}
              headerText="Potongan"
              headerTextAlign="Center"
              textAlign="Right"
              width="100"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="pajak"
              format={"N0"}
              headerText="Pajak"
              headerTextAlign="Center"
              textAlign="Right"
              width="90"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="jumlah"
              format={"N0"}
              headerText="Jumlah"
              headerTextAlign="Center"
              textAlign="Right"
              width="110"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="beratKg"
              format={"N0"}
              headerText="Berat (Kg)"
              headerTextAlign="Center"
              textAlign="Right"
              width="100"
            />
            <ColumnDirective
              clipMode="EllipsisWithTooltip"
              field="keterangan"
              headerText="Keterangan"
              headerTextAlign="Center"
              textAlign="Left"
              width="250"
            />
          </ColumnsDirective>

          <Inject services={[Page, Sort, Resize]} />
        </GridComponent>
      </div>

      <div className="flex h-fit shrink-0 items-center justify-between text-black">
        <div className="flex items-center gap-2 font-semibold">
          <span>Total Berat</span>
          <span>0</span>
          <span>Kg</span>
        </div>

        <div className="flex items-center gap-2 font-semibold">
          <span>Sub Total</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};
