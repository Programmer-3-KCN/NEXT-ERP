import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import SyncfusionLayout from "@/src/layouts/syncfusion";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Syncfusion",
};

const SyncfusionPage: FC = (): ReactElement => <SyncfusionLayout />;

export default SyncfusionPage;
