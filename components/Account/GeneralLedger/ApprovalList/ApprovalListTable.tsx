import OperationsTableComp from "@/components/Operations/OperationsTableComp";
import Pagination from "@/components/ui/Pagination";
import { ThreeDotIcon } from "@/icons/svgComp/RegionIcons";
import { SquareDotIcon } from "@/icons/svgComp/TableIcons";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ApprovalFormModal } from "./ApprovalFormModal";
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
    name: "Ledger Name",
    class: "Ledger Class",
    parent: "Ledger Parent",
    status: "Approved",
  },
  {
    id: 1,
    code: "1",
    name: "Ledger Name",
    class: "Ledger Class",
    parent: "Ledger Parent",
    status: "Denied",
  },
  {
    id: 1,
    code: "1",
    name: "Ledger Name",
    class: "Ledger Class",
    parent: "Ledger Parent",
    status: "Approved",
  },
];

const headers = [
  { content: <>S/N</> },
  { content: <>Ledger Name</> },
  { content: <> Ledger Class</> },
  { content: <> Ledger Parent</> },

  { content: <> Status</> },

  { content: <> </> },
];

// Custom row render function

const ApprovalListTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const renderRow = (item: DataItem, index: number) => (
    <tr
      key={index}
      className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
    >
      <td className="py-1 px-4">{item.code}</td>
      <td className="py-1 px-4">{item.name}</td>
      <td className="py-1 px-4">{item.class}</td>
      <td className="py-1 px-4">{item.parent}</td>
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
          <ApprovalFormModal setIsOpen={setIsOpen} />
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

export default ApprovalListTable;
