import OperationsTableComp from "@/components/Operations/OperationsTableComp";
import Pagination from "@/components/ui/Pagination";
import { ThreeDotIcon } from "@/icons/svgComp/RegionIcons";
import { SquareDotIcon } from "@/icons/svgComp/TableIcons";

// Sample data type
type DataItem = {
  id: number;
  code: string;
  name: string;
  Region: string;
  Branch: string;
  Class: string;
  sub: string;
  Classification: string;
  Currency: string;
  status: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    code: "1",
    name: "Ledger Name",
    Region: "region",
    Branch: "branch",
    Class: "class",
    sub: "subClass",
    Classification: "classification",
    Currency: "NGN",
    status: "Approved",
  },
  {
    id: 1,
    code: "1",
    name: "Ledger Name",
    Region: "region",
    Branch: "branch",
    Class: "class",
    sub: "subClass",
    Classification: "classification",
    Currency: "NGN",
    status: "Denied",
  },
  {
    id: 1,
    code: "1",
    name: "Ledger Name",
    Region: "region",
    Branch: "branch",
    Class: "class",
    sub: "subClass",
    Classification: "classification",
    Currency: "NGN",
    status: "Approved",
  },
];

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
const renderRow = (item: DataItem, index: number) => (
  <tr
    key={index}
    className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
  >
    <td className="py-1 px-4">{item.code}</td>
    <td className="py-1 px-4">{item.name}</td>
    <td className="py-1 px-4">{item.Region}</td>
    <td className="py-1 px-4">{item.Branch}</td>
    <td className="py-1 px-4">{item.Class}</td>
    <td className="py-1 px-4">{item.sub}</td>
    <td className="py-1 px-4">{item.Classification}</td>
    <td className="py-1 px-4">{item.Currency}</td>
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
  </tr>
);

const LedgerListTable = () => {
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

export default LedgerListTable;
