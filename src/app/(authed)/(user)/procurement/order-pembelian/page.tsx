import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import OrderPembelianLayout from "@/src/layouts/procurement/order-pembelian";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Order Pembelian (PO)",
};

const OrderPembelianPage: FC = (): ReactElement => <OrderPembelianLayout />;

export default OrderPembelianPage;
