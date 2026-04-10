import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { FC, ReactElement } from "react";

import { Button } from "@/src/components";

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
          <Button color="gray" size="sm" variant="semi">
            Barang Produksi
          </Button>
          <Button color="gray" size="sm" variant="semi">
            Barang Jadi
          </Button>
        </div>
        <Button color="gray" onClick={() => setModal((prev) => ({ ...prev, jenisBarang: false }))} size="sm" variant="semi">
          Batal
        </Button>
      </section>
    </DialogComponent>
  );
};
