import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { FC, ReactElement } from "react";

import { Button } from "@/src/components";

import { useLocalContext } from "../../../../context";

export const JenisBarang: FC = (): ReactElement => {
  const { modal, setModal, setModalParameter } = useLocalContext();

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
          <Button
            className="w-40"
            color="gray"
            onClick={() => {
              setModal((prev) => ({ ...prev, baru: true, jenisBarang: false }));
              setModalParameter((prev) => ({ ...prev, jenisBarang: "barang-produksi" }));
            }}
            size="sm"
            variant="semi"
          >
            Barang Produksi
          </Button>
          <Button
            className="w-40"
            color="gray"
            onClick={() => {
              setModal((prev) => ({ ...prev, baru: true, jenisBarang: false }));
              setModalParameter((prev) => ({ ...prev, jenisBarang: "barang-jadi" }));
            }}
            size="sm"
            variant="semi"
          >
            Barang Jadi
          </Button>
        </div>
        <Button
          className="w-40"
          color="gray"
          onClick={() => {
            setModal((prev) => ({ ...prev, jenisBarang: false }));
            setModalParameter((prev) => ({ ...prev, jenisBarang: null }));
          }}
          size="sm"
          variant="semi"
        >
          Batal
        </Button>
      </section>
    </DialogComponent>
  );
};
