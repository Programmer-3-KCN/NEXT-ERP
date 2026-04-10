"use client";

import { ChangeEventArgs as ButtonChangeEventArgs, ChangeArgs, CheckBoxComponent, RadioButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ChangedEventArgs, DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { ChangeEventArgs as DropDownChangeEventArgs, DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { InputEventArgs, TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { FC, Fragment, ReactElement } from "react";

import {
  FilterLayoutAsideCheckbox,
  FilterLayoutAsideContentContainer,
  FilterLayoutAsideFromTo,
  FilterLayoutAsideInput,
  FilterLayoutAsideLegend,
  FilterLayoutAsideRefreshButton,
} from "@/src/components";

import { IFilterState, useLocalContext } from "../../context";

export const Aside: FC = (): ReactElement => {
  const { filter, setFilter } = useLocalContext();

  const handleTextChange = (name: keyof IFilterState) => (e: InputEventArgs) => {
    setFilter((prev) => ({ ...prev, [`${name}Checked` as keyof IFilterState]: true, [name]: e.value ?? "" }));
  };

  const handleDateChange = (name: keyof IFilterState, isCheckedField: keyof IFilterState) => (e: ChangedEventArgs) => {
    setFilter((prev) => ({ ...prev, [isCheckedField]: true, [name]: e.value ?? null }));
  };

  const handleDropDownChange = (name: keyof IFilterState) => (e: DropDownChangeEventArgs) => {
    setFilter((prev) => ({ ...prev, [`${name}Checked` as keyof IFilterState]: true, [name]: e.value as string }));
  };

  const handleCheckChange = (name: keyof IFilterState) => (e: ButtonChangeEventArgs) => {
    setFilter((prev) => ({ ...prev, [name]: e.checked ?? false }));
  };

  const handleRadioChange = (e: ChangeArgs) => {
    setFilter((prev) => ({ ...prev, kelompokSupplier: e.value as IFilterState["kelompokSupplier"] }));
  };

  return (
    <>
      <FilterLayoutAsideContentContainer>
        {/* No. PO */}
        <FilterLayoutAsideInput>
          <CheckBoxComponent change={handleCheckChange("noPOChecked")} checked={filter.noPOChecked} label="No. PO" />
          <TextBoxComponent input={handleTextChange("noPO")} value={filter.noPO} />
        </FilterLayoutAsideInput>

        {/* Tanggal */}
        <FilterLayoutAsideInput>
          <CheckBoxComponent change={handleCheckChange("tanggalChecked")} checked={filter.tanggalChecked} label="Tanggal" />
          <FilterLayoutAsideFromTo
            from={
              <DatePickerComponent
                format={"dd-MM-yyyy"}
                onChange={handleDateChange("tanggalFrom", "tanggalChecked")}
                showClearButton={false}
                value={filter.tanggalFrom ?? undefined}
              />
            }
            to={
              <DatePickerComponent
                format={"dd-MM-yyyy"}
                onChange={handleDateChange("tanggalTo", "tanggalChecked")}
                showClearButton={false}
                value={filter.tanggalTo ?? undefined}
              />
            }
          />
        </FilterLayoutAsideInput>

        {/* Tanggal Berlaku */}
        <FilterLayoutAsideInput>
          <CheckBoxComponent change={handleCheckChange("tanggalBerlakuChecked")} checked={filter.tanggalBerlakuChecked} label="Tanggal Berlaku" />
          <FilterLayoutAsideFromTo
            from={
              <DatePickerComponent
                format={"dd-MM-yyyy"}
                onChange={handleDateChange("tanggalBerlakuFrom", "tanggalBerlakuChecked")}
                showClearButton={false}
                value={filter.tanggalBerlakuFrom ?? undefined}
              />
            }
            to={
              <DatePickerComponent
                format={"dd-MM-yyyy"}
                onChange={handleDateChange("tanggalBerlakuTo", "tanggalBerlakuChecked")}
                showClearButton={false}
                value={filter.tanggalBerlakuTo ?? undefined}
              />
            }
          />
        </FilterLayoutAsideInput>

        {/* Tanggal Kirim */}
        <FilterLayoutAsideInput>
          <CheckBoxComponent change={handleCheckChange("tanggalKirimChecked")} checked={filter.tanggalKirimChecked} label="Tanggal Kirim" />
          <FilterLayoutAsideFromTo
            from={
              <DatePickerComponent
                format={"dd-MM-yyyy"}
                onChange={handleDateChange("tanggalKirimFrom", "tanggalKirimChecked")}
                showClearButton={false}
                value={filter.tanggalKirimFrom ?? undefined}
              />
            }
            to={
              <DatePickerComponent
                format={"dd-MM-yyyy"}
                onChange={handleDateChange("tanggalKirimTo", "tanggalKirimChecked")}
                showClearButton={false}
                value={filter.tanggalKirimTo ?? undefined}
              />
            }
          />
        </FilterLayoutAsideInput>

        {/* Nama Supplier */}
        <FilterLayoutAsideInput>
          <CheckBoxComponent change={handleCheckChange("namaSupplierChecked")} checked={filter.namaSupplierChecked} label="Nama Supplier" />
          <TextBoxComponent input={handleTextChange("namaSupplier")} value={filter.namaSupplier} />
        </FilterLayoutAsideInput>

        {/* Nama Barang */}
        <FilterLayoutAsideInput>
          <CheckBoxComponent change={handleCheckChange("namaBarangChecked")} checked={filter.namaBarangChecked} label="Nama Barang" />
          <TextBoxComponent input={handleTextChange("namaBarang")} value={filter.namaBarang} />
        </FilterLayoutAsideInput>

        {/* Status Dokumen */}
        <FilterLayoutAsideInput>
          <CheckBoxComponent change={handleCheckChange("statusDokumenChecked")} checked={filter.statusDokumenChecked} label="Status Dokumen" />
          <DropDownListComponent change={handleDropDownChange("statusDokumen")} value={filter.statusDokumen} />
        </FilterLayoutAsideInput>

        {/* Status Approval */}
        <FilterLayoutAsideInput>
          <CheckBoxComponent change={handleCheckChange("statusApprovalChecked")} checked={filter.statusApprovalChecked} label="Status Approval" />
          <DropDownListComponent change={handleDropDownChange("statusApproval")} value={filter.statusApproval} />
        </FilterLayoutAsideInput>

        {/* Kelompok Supplier */}
        <FilterLayoutAsideLegend label="Kelompok Supplier">
          {(
            [
              { label: "Semua", value: "semua" },
              { label: "Besi", value: "besi" },
              { label: "Non Besi", value: "nonBesi" },
              { label: "Besi dan Non Besi", value: "besiDanNonBesi" },
            ] as { label: string; value: IFilterState["kelompokSupplier"] }[]
          ).map(({ label, value }) => (
            <RadioButtonComponent
              change={handleRadioChange}
              checked={filter.kelompokSupplier === value}
              key={value}
              label={label}
              name="kelompokSupplier"
              value={value}
            />
          ))}
        </FilterLayoutAsideLegend>

        {/* Checkboxes */}
        <FilterLayoutAsideCheckbox>
          {(
            [
              { label: "PO Kontrak", name: "poKontrak" },
              { label: "PO NON Kontrak", name: "poNonKontrak" },
              { label: "PO Barang Produksi", name: "poBarangProduksi" },
              { label: "PO Dengan Pajak", name: "poDenganPajak" },
              { label: "Kiriman Langsung", name: "kirimanLangsung" },
              { label: "Pembatalan Order", name: "pembatalanOrder" },
              { label: "Belum ACC DIREKS", name: "belumAccDireks" },
              { label: "Sudah ACC DIREKS", name: "sudahAccDireks" },
            ] as { label: string; name: keyof IFilterState }[]
          ).map(({ label, name }) => {
            switch (name) {
              case "belumAccDireks":
                return (
                  <Fragment key={name}>
                    <style>
                      {`
                      .e-checkbox-wrapper input.${name} ~ span.e-label {
                        background: oklch(86.5% 0.127 207.078) !important;
                      }
                      `}
                    </style>

                    <CheckBoxComponent change={handleCheckChange(name)} checked={filter[name] as boolean} className={name} label={label} />
                  </Fragment>
                );
              case "pembatalanOrder":
                return (
                  <Fragment key={name}>
                    <style>
                      {`
                      .e-checkbox-wrapper input.${name} ~ span.e-label {
                        background: oklch(80.8% 0.114 19.571) !important;
                      }
                      `}
                    </style>

                    <CheckBoxComponent change={handleCheckChange(name)} checked={filter[name] as boolean} className={name} label={label} />
                  </Fragment>
                );
              case "sudahAccDireks":
                return (
                  <Fragment key={name}>
                    <style>
                      {`
                      .e-checkbox-wrapper input.${name} ~ span.e-label {
                        background: oklch(87.1% 0.15 154.449) !important;
                      }
                      `}
                    </style>

                    <CheckBoxComponent change={handleCheckChange(name)} checked={filter[name] as boolean} className={name} label={label} />
                  </Fragment>
                );
              default:
                return <CheckBoxComponent change={handleCheckChange(name)} checked={filter[name] as boolean} key={name} label={label} />;
            }
          })}
        </FilterLayoutAsideCheckbox>
      </FilterLayoutAsideContentContainer>

      <FilterLayoutAsideRefreshButton />
    </>
  );
};
