import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { TextAreaComponent, TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { ArrowBigRight, ArrowRight, Building2, ClipboardList, Eraser, Save, Trash2, X } from "lucide-react";
import { FC, ReactElement, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { Button, FieldCell } from "@/src/components";

import { useLocalContext } from "../../../../context";
import { DataBarang } from "./batches";

const Baru: FC = (): ReactElement => {
  const { modalParameter, setModal } = useLocalContext();
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <DialogComponent
      animationSettings={{ duration: 0 }}
      close={() => setModal((prev) => ({ ...prev, baru: false }))}
      header={`Order Pembelian (PO) - BARU [${modalParameter.jenisTransaksi?.toUpperCase()}]`}
      height={"96%"}
      isModal={true}
      position={{ X: "center", Y: "center" }}
      showCloseIcon={true}
      target="#dialog-target"
      visible={true}
      width={"98%"}
    >
      <div className="flex size-full max-h-full flex-col gap-1 overflow-hidden">
        <div className="flex">
          <FieldCell className={{ container: "w-fit max-w-56" }} label="Tanggal">
            <DatePickerComponent format={"dd-MM-yyyy"} showClearButton={false} />
          </FieldCell>

          <FieldCell className={{ container: "flex-1" }} label="Supplier">
            <TextBoxComponent />
          </FieldCell>

          <FieldCell className={{ container: "w-fit max-w-56" }} label="Termin">
            <TextBoxComponent />
          </FieldCell>
        </div>

        <div className="flex">
          <div>
            <FieldCell className={{ container: "w-fit max-w-56" }} label="Tgl. Berlaku PO">
              <DatePickerComponent format={"dd-MM-yyyy"} showClearButton={false} />
            </FieldCell>

            <FieldCell className={{ container: "w-fit max-w-56" }} label="Tgl. Estimasi Kirim">
              <DatePickerComponent format={"dd-MM-yyyy"} showClearButton={false} />
            </FieldCell>
          </div>

          <FieldCell className={{ container: "flex flex-1 flex-col", content: "flex-1" }} label="Alamat Pengiriman">
            <TextAreaComponent cssClass="h-full" resizeMode="None" width={"100%"} />
          </FieldCell>

          <div>
            <FieldCell className={{ container: "w-fit max-w-56" }} label="Cara Pengiriman">
              <DropDownListComponent />
            </FieldCell>

            <FieldCell className={{ container: "w-fit max-w-56" }} label="Pemesanan Via">
              <DropDownListComponent />
            </FieldCell>
          </div>

          <FieldCell className={{ container: "size-fit max-w-56" }} label="Pajak">
            <DropDownListComponent />
          </FieldCell>
        </div>

        <Tabs className={"flex flex-1 flex-col overflow-hidden"} onSelect={setSelectedTab} selectedIndex={selectedTab}>
          <TabList>
            <Tab>Data Barang</Tab>
            <Tab>File Pendukung</Tab>
          </TabList>

          <TabPanel className={selectedTab === 0 ? "flex h-full flex-1 flex-col overflow-hidden" : "hidden"}>
            <DataBarang />
          </TabPanel>

          <TabPanel>
            <span className="font-semibold text-black">Coming Soon</span>
          </TabPanel>
        </Tabs>

        <div className="flex gap-1">
          <div className="flex w-48 flex-col gap-1 rounded-sm border border-gray-400 bg-gray-300 p-2">
            <label className="text-black">
              PO Grup
              <DropDownListComponent width="100%" />
            </label>

            <label className="text-black">
              PPN Atas Nama
              <DropDownListComponent width="100%" />
            </label>

            <Button className="my-auto" color="blue" size="sm" variant="solid">
              <ArrowBigRight size={14} />
              Terapkan Semua
            </Button>
          </div>

          <div className="flex flex-1 flex-col gap-1">
            <CheckBoxComponent checked={false} cssClass="self-end mr-2" label="Barang dikirim ke customer (Kirim Langsung)" />

            <FieldCell
              className={{
                container: "flex flex-1 flex-col border-gray-400",
                content: "flex-1",
                label: "border-gray-400 bg-gray-300 text-black",
              }}
              label="Catatan"
            >
              <TextAreaComponent cssClass="h-full" resizeMode="None" width={"100%"} />
            </FieldCell>
          </div>

          <div className="flex w-72 flex-col justify-around rounded-sm border border-gray-400 bg-gray-300 p-2 text-black">
            <div className="flex items-center gap-1">
              <span className="text-sm whitespace-nowrap">Diskon (%)</span>
              <TextBoxComponent value="" width="100%" />
              <span>=</span>
              <TextBoxComponent value="" width="100%" />
            </div>

            <span className="flex h-8 items-center text-sm">DPP</span>

            <span className="flex h-8 items-center text-sm">Pajak</span>

            <div className="flex items-center gap-1">
              <span className="text-sm whitespace-nowrap">Estimasi Biaya Kirim</span>
              <Button className="w-fit" color="red" size="sm" variant="ghost">
                %
              </Button>
              <TextBoxComponent width="100%" />
            </div>
            <div />

            <hr className="mt-2 mb-1 border-black" />

            <span className="text-sm">Total Setelah Pajak</span>
          </div>
        </div>

        <div className="flex justify-end gap-1 font-semibold">
          <Button color="gray" size="sm" variant="solid">
            <Building2 size={14} />
            Info Supplier
          </Button>

          <Button color="gray" size="sm" variant="solid">
            <ClipboardList size={14} />
            Daftar PP
          </Button>

          <Button color="gray" size="sm" variant="solid">
            <Eraser size={14} />
            Bersihkan
          </Button>

          <Button color="gray" size="sm" variant="solid">
            <Trash2 size={14} />
            Hapus
          </Button>

          <Button color="red" onClick={() => setModal((prev) => ({ ...prev, baru: false }))} size="sm" variant="solid">
            <X size={14} />
            Batal
          </Button>

          <Button color="blue" size="sm" variant="solid">
            <ArrowRight size={14} />
            Lanjut
          </Button>

          <Button color="green" size="sm" variant="solid">
            <Save size={14} />
            Simpan
          </Button>
        </div>
      </div>
    </DialogComponent>
  );
};

export default Baru;
