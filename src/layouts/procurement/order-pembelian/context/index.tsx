"use client";

import { createContext, Dispatch, FC, PropsWithChildren, ReactElement, SetStateAction, useContext, useState } from "react";

export interface IFilterState {
  belumAccDireks: boolean;
  kelompokSupplier: "besi" | "besiDanNonBesi" | "nonBesi" | "semua";
  kirimanLangsung: boolean;
  namaBarang: string;
  namaBarangChecked: boolean;
  namaSupplier: string;
  namaSupplierChecked: boolean;
  noPO: string;
  noPOChecked: boolean;
  pembatalanOrder: boolean;
  poBarangProduksi: boolean;
  poDenganPajak: boolean;
  poKontrak: boolean;
  poNonKontrak: boolean;
  statusApproval: string;
  statusApprovalChecked: boolean;
  statusDokumen: string;
  statusDokumenChecked: boolean;
  sudahAccDireks: boolean;
  tanggalBerlakuChecked: boolean;
  tanggalBerlakuFrom: Date | null;
  tanggalBerlakuTo: Date | null;
  tanggalChecked: boolean;
  tanggalFrom: Date | null;
  tanggalKirimChecked: boolean;
  tanggalKirimFrom: Date | null;
  tanggalKirimTo: Date | null;
  tanggalTo: Date | null;
}

const INITIAL_FILTER_DATA: IFilterState = {
  belumAccDireks: false,
  kelompokSupplier: "semua",
  kirimanLangsung: false,
  namaBarang: "",
  namaBarangChecked: false,
  namaSupplier: "",
  namaSupplierChecked: false,
  noPO: "",
  noPOChecked: false,
  pembatalanOrder: false,
  poBarangProduksi: false,
  poDenganPajak: false,
  poKontrak: false,
  poNonKontrak: false,
  statusApproval: "",
  statusApprovalChecked: false,
  statusDokumen: "",
  statusDokumenChecked: false,
  sudahAccDireks: false,
  tanggalBerlakuChecked: false,
  tanggalBerlakuFrom: null,
  tanggalBerlakuTo: null,
  tanggalChecked: false,
  tanggalFrom: null,
  tanggalKirimChecked: false,
  tanggalKirimFrom: null,
  tanggalKirimTo: null,
  tanggalTo: null,
};

type TLocalContext = Readonly<{
  filter: IFilterState;
  setFilter: Dispatch<SetStateAction<IFilterState>>;
}>;

const LocalContext = createContext<null | TLocalContext>(null);

export const useLocalContext = (): TLocalContext => {
  const context = useContext(LocalContext);

  if (!context) {
    throw new Error("useLocalContext must be used within LocalContextProvider");
  }

  return context;
};

type T = Readonly<PropsWithChildren>;

export const LocalContextProvider: FC<T> = (props): ReactElement => {
  const [filter, setFilter] = useState<IFilterState>(INITIAL_FILTER_DATA);

  return <LocalContext.Provider value={{ filter, setFilter }}>{props.children}</LocalContext.Provider>;
};
