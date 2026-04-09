"use client";

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import {
  AxisModel,
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  LegendSeriesModel,
  LineSeries,
  MarkerSettingsModel,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  TooltipSettingsModel,
} from "@syncfusion/ej2-react-charts";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Page, Resize, Sort } from "@syncfusion/ej2-react-grids";
import { SliderComponent, TextAreaComponent, TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { FC, ReactElement, useState } from "react";

const dataChart: object[] = [
  { expense: 28, month: "Jan", revenue: 42 },
  { expense: 24, month: "Feb", revenue: 38 },
  { expense: 29, month: "Mar", revenue: 45 },
  { expense: 31, month: "Apr", revenue: 47 },
  { expense: 35, month: "May", revenue: 54 },
  { expense: 30, month: "Jun", revenue: 49 },
  { expense: 37, month: "Jul", revenue: 58 },
  { expense: 40, month: "Aug", revenue: 61 },
  { expense: 33, month: "Sep", revenue: 56 },
  { expense: 32, month: "Oct", revenue: 52 },
  { expense: 29, month: "Nov", revenue: 48 },
  { expense: 41, month: "Dec", revenue: 64 },
];

const dataGrid: object[] = [
  {
    AccountName: "Operating Cash",
    Amount: 12500.75,
    ApprovalBy: "Dina Putri",
    BalanceAfter: 84500.2,
    Category: "Revenue",
    Counterparty: "PT Sinar Abadi",
    Currency: "IDR",
    Department: "Finance",
    PaymentMethod: "Bank Transfer",
    ReferenceNo: "INV-AR-001",
    Status: "Cleared",
    TransactionDate: new Date("2026-01-03"),
    TransactionID: "FIN-2026-001",
  },
  {
    AccountName: "Accounts Receivable",
    Amount: 8420.5,
    ApprovalBy: "Raka Yusuf",
    BalanceAfter: 76120.45,
    Category: "Invoice Payment",
    Counterparty: "CV Mitra Niaga",
    Currency: "USD",
    Department: "Billing",
    PaymentMethod: "Virtual Account",
    ReferenceNo: "INV-AR-002",
    Status: "Pending",
    TransactionDate: new Date("2026-01-05"),
    TransactionID: "FIN-2026-002",
  },
  {
    AccountName: "Marketing Budget",
    Amount: 2150,
    ApprovalBy: "Nadia Sari",
    BalanceAfter: 73970.45,
    Category: "Expense",
    Counterparty: "Meta Ads",
    Currency: "USD",
    Department: "Marketing",
    PaymentMethod: "Corporate Card",
    ReferenceNo: "EXP-MKT-014",
    Status: "Approved",
    TransactionDate: new Date("2026-01-08"),
    TransactionID: "FIN-2026-003",
  },
  {
    AccountName: "Payroll Reserve",
    Amount: 6800,
    ApprovalBy: "Arif Hidayat",
    BalanceAfter: 67170.45,
    Category: "Payroll",
    Counterparty: "Internal Payroll",
    Currency: "IDR",
    Department: "Human Capital",
    PaymentMethod: "Bank Transfer",
    ReferenceNo: "PAY-HR-021",
    Status: "Scheduled",
    TransactionDate: new Date("2026-01-10"),
    TransactionID: "FIN-2026-004",
  },
  {
    AccountName: "Emergency Fund",
    Amount: 3500,
    ApprovalBy: "Dina Putri",
    BalanceAfter: 63670.45,
    Category: "Savings",
    Counterparty: "Bank Mandiri",
    Currency: "IDR",
    Department: "Treasury",
    PaymentMethod: "Auto Debit",
    ReferenceNo: "SVG-TRS-008",
    Status: "Cleared",
    TransactionDate: new Date("2026-01-12"),
    TransactionID: "FIN-2026-005",
  },
  {
    AccountName: "Equipment Upgrade",
    Amount: 4975.99,
    ApprovalBy: "Raka Yusuf",
    BalanceAfter: 58694.46,
    Category: "Investment",
    Counterparty: "PT Tech Supply",
    Currency: "USD",
    Department: "IT Procurement",
    PaymentMethod: "Wire Transfer",
    ReferenceNo: "CAPEX-IT-011",
    Status: "Approved",
    TransactionDate: new Date("2026-01-15"),
    TransactionID: "FIN-2026-006",
  },
  {
    AccountName: "Tax Reserve",
    Amount: 2890.35,
    ApprovalBy: "Salsa Rahma",
    BalanceAfter: 55804.11,
    Category: "Tax",
    Counterparty: "Direktorat Pajak",
    Currency: "IDR",
    Department: "Compliance",
    PaymentMethod: "Bank Transfer",
    ReferenceNo: "TAX-CMP-004",
    Status: "Pending",
    TransactionDate: new Date("2026-01-18"),
    TransactionID: "FIN-2026-007",
  },
  {
    AccountName: "Client Retainer",
    Amount: 9100,
    ApprovalBy: "Dina Putri",
    BalanceAfter: 64904.11,
    Category: "Revenue",
    Counterparty: "Global Ventures Ltd",
    Currency: "USD",
    Department: "Sales",
    PaymentMethod: "Credit Card",
    ReferenceNo: "REV-SLS-030",
    Status: "Cleared",
    TransactionDate: new Date("2026-01-20"),
    TransactionID: "FIN-2026-008",
  },
  {
    AccountName: "Office Rent",
    Amount: 1750,
    ApprovalBy: "Arif Hidayat",
    BalanceAfter: 63154.11,
    Category: "Expense",
    Counterparty: "PT Graha Properti",
    Currency: "IDR",
    Department: "General Affairs",
    PaymentMethod: "Auto Debit",
    ReferenceNo: "OPS-GA-017",
    Status: "Cleared",
    TransactionDate: new Date("2026-01-22"),
    TransactionID: "FIN-2026-009",
  },
  {
    AccountName: "Treasury Allocation",
    Amount: 7600,
    ApprovalBy: "Salsa Rahma",
    BalanceAfter: 55554.11,
    Category: "Investment",
    Counterparty: "BNI Sekuritas",
    Currency: "IDR",
    Department: "Treasury",
    PaymentMethod: "Wire Transfer",
    ReferenceNo: "TRS-INV-013",
    Status: "Scheduled",
    TransactionDate: new Date("2026-01-25"),
    TransactionID: "FIN-2026-010",
  },
];

export const Content: FC = (): ReactElement => {
  const financeCategories = ["Revenue", "Expense", "Investment", "Payroll", "Savings"];

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const tooltip: TooltipSettingsModel = { enable: true, shared: false };
  const primaryYAxis: AxisModel = { labelFormat: "${value}K" };
  const primaryXAxis: AxisModel = { valueType: "Category" };
  const legendSettings: LegendSeriesModel = { visible: true };
  const marker: MarkerSettingsModel = { dataLabel: { visible: true } };

  const pageSettings: object = { pageSize: 6 };
  const filterSettings: object = { type: "Excel" };

  return (
    <section className="space-y-5 p-5">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold">Colors :</h2>
        <ButtonComponent cssClass="e-primary">Syncfusion</ButtonComponent>
        <ButtonComponent cssClass="e-success">Syncfusion</ButtonComponent>
        <ButtonComponent cssClass="e-info">Syncfusion</ButtonComponent>
        <ButtonComponent cssClass="e-warning">Syncfusion</ButtonComponent>
        <ButtonComponent cssClass="e-danger">Syncfusion</ButtonComponent>
        <ButtonComponent cssClass="e-link">Syncfusion</ButtonComponent>
      </div>

      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold">Variants :</h2>
        <ButtonComponent cssClass="e-primary e-flat">Syncfusion</ButtonComponent>
        <ButtonComponent cssClass="e-success e-outline">Syncfusion</ButtonComponent>
        <ButtonComponent cssClass="e-info e-round">S</ButtonComponent>
      </div>

      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold">Sizes :</h2>
        <ButtonComponent cssClass="e-primary">Syncfusion</ButtonComponent>
        <ButtonComponent cssClass="e-success e-small">Syncfusion</ButtonComponent>
      </div>

      <div className="flex gap-2">
        <h2 className="text-lg font-semibold">Input :</h2>
        <div>
          <TextBoxComponent placeholder="Enter Name" width={250}></TextBoxComponent>
        </div>
        <TextAreaComponent id="default" placeholder="Enter Comment" width={250}></TextAreaComponent>
        <div className="flex items-center justify-center rounded-md border border-black bg-white px-5">
          <SliderComponent value={30} width={250} />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold">Dropdown :</h2>
        <DropDownListComponent dataSource={financeCategories} id="ddlelement" placeholder="Select Category" width={250} />
      </div>

      <div className="flex gap-2">
        <h2 className="text-lg font-semibold">Calendar :</h2>
        <CalendarComponent change={(e) => setSelectedDate(e.value)} id="calendar" value={selectedDate} />
        {selectedDate && <p className="size-fit rounded-md border border-black bg-white p-2">Selected: {selectedDate.toLocaleDateString()}</p>}
      </div>

      <div className="flex size-full gap-2">
        <h2 className="text-lg font-semibold">Chart :</h2>
        <ChartComponent id="charts" legendSettings={legendSettings} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip}>
          <Inject services={[ColumnSeries, DataLabel, Tooltip, Legend, LineSeries, Category]} />
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={dataChart} marker={marker} name="Revenue" type="Column" xName="month" yName="revenue" />
            <SeriesDirective dataSource={dataChart} marker={marker} name="Expense" type="Line" xName="month" yName="expense" />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>

      <div className="flex gap-2">
        <h2 className="text-lg font-semibold whitespace-nowrap">Grid :</h2>
        <div className="flex-1 overflow-hidden">
          <GridComponent
            allowFiltering={true}
            allowGrouping={true}
            allowPaging={true}
            allowResizing={true}
            allowSorting={true}
            clipMode="EllipsisWithTooltip"
            dataSource={dataGrid}
            filterSettings={filterSettings}
            height={"100%"}
            pageSettings={pageSettings}
            width={"100%"}
          >
            <ColumnsDirective>
              <ColumnDirective clipMode="EllipsisWithTooltip" field="TransactionID" headerText="Transaction ID" width="140" />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="ReferenceNo" headerText="Reference Number" width="140" />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="AccountName" headerText="Account Name" width="170" />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="Department" headerText="Department Owner" width="150" />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="Category" headerText="Finance Category" width="130" />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="Counterparty" headerText="Counterparty Name" width="170" />
              <ColumnDirective
                clipMode="EllipsisWithTooltip"
                field="Amount"
                format="C2"
                headerText="Transaction Amount"
                textAlign="Right"
                width="120"
              />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="Currency" headerText="Currency Code" textAlign="Center" width="100" />
              <ColumnDirective
                clipMode="EllipsisWithTooltip"
                field="TransactionDate"
                format="yMd"
                headerText="Transaction Date"
                type="date"
                width="130"
              />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="PaymentMethod" headerText="Payment Method" width="150" />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="ApprovalBy" headerText="Approved By User" width="140" />
              <ColumnDirective
                clipMode="EllipsisWithTooltip"
                field="BalanceAfter"
                format="C2"
                headerText="Balance After Entry"
                textAlign="Right"
                width="140"
              />
              <ColumnDirective clipMode="EllipsisWithTooltip" field="Status" headerText="Transaction Status" width="110" />
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group, Resize]} />
          </GridComponent>
        </div>
      </div>
    </section>
  );
};
