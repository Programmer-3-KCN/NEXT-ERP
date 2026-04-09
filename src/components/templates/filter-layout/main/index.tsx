import { FC, PropsWithChildren, ReactElement } from "react";

type T = Readonly<PropsWithChildren>;

export const FilterLayoutMain: FC<T> = (props): ReactElement => <main className="flex-1 overflow-auto p-1">{props.children}</main>;
