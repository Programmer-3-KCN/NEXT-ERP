import { FC, ReactElement } from "react";

import { FilterLayoutAside, FilterLayoutContainer, FilterLayoutMain } from "@/src/components";

import { Main } from "./modules";

const SyncfusionLayout: FC = (): ReactElement => (
  <FilterLayoutContainer>
    <FilterLayoutAside>
      <h2 className="text-center text-2xl font-bold">ASIDE</h2>
    </FilterLayoutAside>

    <FilterLayoutMain>
      <Main />
    </FilterLayoutMain>
  </FilterLayoutContainer>
);

export default SyncfusionLayout;
