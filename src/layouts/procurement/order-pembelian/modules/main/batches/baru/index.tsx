import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { FC, ReactElement } from "react";

import { useLocalContext } from "../../../../context";

export const Baru: FC = (): ReactElement => {
  const { modal, modalParameter, setModal } = useLocalContext();

  return (
    <DialogComponent
      animationSettings={{ duration: 0 }}
      close={() => setModal((prev) => ({ ...prev, baru: false }))}
      header={"Order Pembelian (PO) - Baru"}
      height={"95%"}
      isModal={true}
      position={{ X: "center", Y: "center" }}
      showCloseIcon={true}
      target="#dialog-target"
      visible={modal.baru}
      width={"95%"}
    >
      {JSON.stringify(modalParameter)}
    </DialogComponent>
  );
};
