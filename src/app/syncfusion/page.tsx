import { Metadata } from "next";
import { FC, ReactElement } from "react";

import SyncfusionLayout from "@/src/layouts/syncfusion";

export const metadata: Metadata = {
  title: "Syncfusion",
};

const SyncfusionPage: FC = (): ReactElement => <SyncfusionLayout />;

export default SyncfusionPage;
