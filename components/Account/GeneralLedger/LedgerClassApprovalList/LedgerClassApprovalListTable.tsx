"use client";

import OperationsTableComp from "@/components/Operations/OperationsTableComp";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/ui/Pagination";
import { SquareDotIcon } from "@/icons/svgComp/TableIcons";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { LedgerClasssApprovalFormModal } from "./LedgerClasssApprovalFormModal";

// Sample data type
type DataItem = {
  id: number;
  code: string;
  class: string;
  name: string;
  parent: string;

  status: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    code: "1",
    name: "Loans and Advances",
    class: "Incomes",
    parent: "101",
    status: "Pending",
  },
  {
    id: 1,
    code: "1",
    name: "Other Investments",
    class: "Expenses",
    parent: "102",
    status: "Denied",
  },
  {
    id: 1,
    code: "1",
    name: "Cash bank balances",
    class: "Liabilities",
    parent: "103",
    status: "Approved",
  },
  {
    id: 1,
    code: "1",
    name: "Cash bank balances",
    class: "Capital and Reserves",
    parent: "104",
    status: "Approved",
  },
  {
    id: 1,
    code: "1",
    name: "Cash bank balances",
    class: "Asset",
    parent: "105",
    status: "Approved",
  },
];

const headers = [
  { content: <>S/N</> },
  { content: <>Ledger Subclass Name</> },
  { content: <> ID</> },
  { content: <> Ledger Class</> },

  { content: <> Status</> },
  { content: <> </> },
];

// Custom row render function

const LedgerClassApprovalListTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const renderRow = (item: DataItem, index: number) => (
    <tr
      key={index}
      className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
    >
      <td className="py-1 px-4">{item.code}</td>
      <td className="py-1 px-4">{item.name}</td>
      <td className="py-1 px-4">{item.parent}</td>
      <td className="py-1 px-4">{item.class}</td>
      <td className="py-1 px-4 align-middle">
        <span
          className={` ${
            item?.status === "Denied"
              ? "bg-[#FFDEDC] text-[#FF361B]"
              : "text-[#14804A] bg-[#E1FCEF]"
          }  rounded-sm flex justify-center items-center gap-2 h-[22px] w-[92px]`}
        >
          <SquareDotIcon />
          {item?.status}
        </span>
      </td>
      <td className="py-1 px-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Button className="rounded-[10px] bg-lightButton text-tableText w-fit text-xs h-[30px] hover:text-white ">
              View
            </Button>
          </SheetTrigger>
          <LedgerClasssApprovalFormModal setIsOpen={setIsOpen} />
        </Sheet>
      </td>
    </tr>
  );

  return (
    <div className="bg-[#E7EEFA]">
      <OperationsTableComp
        headers={headers}
        data={sampleData}
        renderRow={renderRow}
      />
      <Pagination />
    </div>
  );
};

export default LedgerClassApprovalListTable;
