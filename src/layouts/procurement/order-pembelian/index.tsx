import { FC, ReactElement } from "react";

import { FilterLayoutAside, FilterLayoutContainer, FilterLayoutMain } from "@/src/components";

import { LocalContextProvider } from "./context";
import { Aside, Main } from "./modules";

const OrderPembelianLayout: FC = (): ReactElement => (
  <LocalContextProvider>
    <FilterLayoutContainer>
      <FilterLayoutAside>
        <Aside />
      </FilterLayoutAside>

      <FilterLayoutMain>
        <Main />
      </FilterLayoutMain>
    </FilterLayoutContainer>
  </LocalContextProvider>
);

export default OrderPembelianLayout;
