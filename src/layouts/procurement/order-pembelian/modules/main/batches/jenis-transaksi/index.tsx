import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { FC, ReactElement } from "react";

import { Button } from "@/src/components";

import { useLocalContext } from "../../../../context";

export const JenisTrasaksi: FC = (): ReactElement => {
  const { modal, setModal } = useLocalContext();

  return (
    <DialogComponent
      animationSettings={{ duration: 0 }}
      close={() => setModal((prev) => ({ ...prev, jenisTransaksi: false }))}
      header={"Jenis Transaksi"}
      height={180}
      isModal={true}
      showCloseIcon={true}
      target="#dialog-target"
      visible={modal.jenisTransaksi}
      width={240}
    >
      <section className="flex flex-col items-center gap-3">
        <div className="flex flex-col gap-1">
          <Button
            className="h-fit min-h-0 w-40 min-w-0 rounded-sm px-2 py-1"
            color="gray"
            onClick={() => setModal((prev) => ({ ...prev, jenisBarang: true, jenisTransaksi: false }))}
            size="sm"
            variant="semi"
          >
            Kontrak
          </Button>
          <Button
            className="h-fit min-h-0 w-40 min-w-0 rounded-sm px-2 py-1"
            color="gray"
            onClick={() => setModal((prev) => ({ ...prev, jenisBarang: true, jenisTransaksi: false }))}
            size="sm"
            variant="semi"
          >
            Non Kontrak
          </Button>
        </div>
        <Button
          className="h-fit min-h-0 w-40 min-w-0 rounded-sm px-2 py-1"
          color="gray"
          onClick={() => setModal((prev) => ({ ...prev, jenisTransaksi: false }))}
          size="sm"
          variant="semi"
        >
          Batal
        </Button>
      </section>
    </DialogComponent>
  );
};
