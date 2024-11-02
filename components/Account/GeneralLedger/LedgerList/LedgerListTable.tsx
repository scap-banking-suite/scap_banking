import { LedgerList, LedgerListItem } from "@/components/api/crud/ledgerList";
import OperationsTableComp from "@/components/Operations/OperationsTableComp";
import Pagination from "@/components/ui/Pagination";
import { ThreeDotIcon } from "@/icons/svgComp/RegionIcons";
import { SquareDotIcon } from "@/icons/svgComp/TableIcons";

type listType = {
  listData: LedgerList["data"];
};

const headers = [
  { content: <>S/N</> },
  { content: <>Ledger Name</> },
  { content: <> Region</> },
  { content: <> Branch</> },
  { content: <> Class</> },
  { content: <> Sub Class</> },
  { content: <> Classification</> },
  { content: <> Currency</> },
  { content: <> Status</> },
];

// Custom row render function
const renderRow = (item: LedgerListItem, index: number) => (
  <tr
    key={index}
    className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
  >
    <td className="py-1 px-4">{item?.id}</td>
    <td className="py-1 px-4">{item?.acctName}</td>
    <td className="py-1 px-4">{item?.parentID}</td>
    <td className="py-1 px-4">{item?.branchID}</td>
    <td className="py-1 px-4">{item?.ledgerClassID}</td>
    <td className="py-1 px-4">{item?.ledgerSubClassID}</td>
    <td className="py-1 px-4">{item?.accountClassificationID}</td>
    <td className="py-1 px-4">{item?.currencyCode}</td>
    <td className="py-1 px-4 align-middle">
      <span
        className={` ${
          item?.status === false
            ? "bg-[#FFDEDC] text-[#FF361B]"
            : "text-[#14804A] bg-[#E1FCEF]"
        }  rounded-sm flex justify-center items-center gap-2 h-[22px] w-[92px]`}
      >
        <SquareDotIcon />
        {item?.status}
      </span>
    </td>
  </tr>
);

const LedgerListTable = ({ listData }: listType) => {
  return (
    <div className="bg-[#E7EEFA]">
      <OperationsTableComp
        headers={headers}
        data={listData}
        renderRow={renderRow}
      />
      <Pagination />
    </div>
  );
};

export default LedgerListTable;
