import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { FC, ReactElement } from "react";

import { useLocalContext } from "../../../../context";

export const JenisBarang: FC = (): ReactElement => {
  const { modal, setModal } = useLocalContext();

  return (
    <DialogComponent
      animationSettings={{ duration: 0 }}
      close={() => setModal((prev) => ({ ...prev, jenisBarang: false }))}
      header={"Jenis Barang"}
      height={180}
      isModal={true}
      showCloseIcon={true}
      target="#dialog-target"
      visible={modal.jenisBarang}
      width={240}
    >
      <section className="flex flex-col items-center gap-3">
        <div className="flex flex-col gap-1">
          <button className="flex w-40 cursor-pointer items-center justify-center rounded-sm border border-gray-300 bg-gray-100 px-2 py-1 text-left text-sm whitespace-nowrap text-black transition duration-100 hover:bg-gray-200 active:scale-95">
            Barang Produksi
          </button>
          <button className="flex w-40 cursor-pointer items-center justify-center rounded-sm border border-gray-300 bg-gray-100 px-2 py-1 text-left text-sm whitespace-nowrap text-black transition duration-100 hover:bg-gray-200 active:scale-95">
            Barang Jadi
          </button>
        </div>
        <button
          className="flex w-40 cursor-pointer items-center justify-center rounded-sm border border-gray-300 bg-gray-100 px-2 py-1 text-left text-sm whitespace-nowrap text-black transition duration-100 hover:bg-gray-200 active:scale-95"
          onClick={() => setModal((prev) => ({ ...prev, jenisBarang: false }))}
        >
          Batal
        </button>
      </section>
    </DialogComponent>
  );
};
