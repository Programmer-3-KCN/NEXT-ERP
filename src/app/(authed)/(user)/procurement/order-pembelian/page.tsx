import { Metadata } from "next";
import { FC, ReactElement } from "react";

import OrderPembelianLayout from "@/src/layouts/procurement/order-pembelian";

export const metadata: Metadata = {
  title: "Order Pembelian (PO)",
};

const OrderPembelianPage: FC = (): ReactElement => <OrderPembelianLayout />;

export default OrderPembelianPage;
