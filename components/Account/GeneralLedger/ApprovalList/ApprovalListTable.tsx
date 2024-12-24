import OperationsTableComp from "@/components/Operations/OperationsTableComp";
import Pagination from "@/components/ui/Pagination";
import { SquareDotIcon } from "@/icons/svgComp/TableIcons";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ApprovalFormModal } from "./ApprovalFormModal";
import { LedgerList, LedgerListItem } from "@/components/api/crud/ledgerList";
import { formatDate } from "@/utils/formatdate";

type listType = {
  listData: LedgerList["data"];
};

const headers = [
  { content: <>S/N</> },
  { content: <> Branch</> },
  { content: <>Mail Message</> },
  { content: <> Status</> },
  { content: <>Date </> },
  { content: <>Action </> },
];

// Custom row render function

const ApprovalListTable = ({ listData }: listType) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderRow = (item: LedgerListItem, index: number) => (
    <tr
      key={index}
      className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
    >
      <td className="py-1 px-4">{index + 1}</td>
      <td className="py-1 px-4 whitespace-nowrap">{item?.branchCode}</td>
      <td className="py-1 px-4 max-w-[300px]">{item?.mailMessage}</td>
      <td className="py-1 px-4 ">
        <span
          className={` ${
            item?.messageStatus === "Denied"
              ? "bg-[#FFDEDC] text-[#FF361B]"
              : "text-[#14804A] bg-[#E1FCEF]"
          }  rounded-sm flex justify-center items-center gap-2 h-[22px] w-[92px]`}
        >
          <SquareDotIcon />
          {item?.messageStatus}
        </span>
      </td>
      <td className="py-1 px-4">{formatDate(item?.createdDate)}</td>
      <td className="py-1 px-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Button className="rounded-[10px] bg-lightButton text-tableText w-fit text-xs h-[30px] hover:text-white ">
              View
            </Button>
          </SheetTrigger>
          <ApprovalFormModal setIsOpen={setIsOpen} item={item} />
        </Sheet>
      </td>
    </tr>
  );

  return (
    <div className="bg-[#E7EEFA]">
      <OperationsTableComp
        headers={headers}
        data={listData}
        renderRow={renderRow}
      />
    </div>
  );
};

export default ApprovalListTable;
