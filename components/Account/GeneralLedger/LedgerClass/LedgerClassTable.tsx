import OperationsTableComp from "@/components/Operations/OperationsTableComp";
import Pagination from "@/components/ui/Pagination";
import { ThreeDotIcon } from "@/icons/svgComp/RegionIcons";
import { SquareDotIcon } from "@/icons/svgComp/TableIcons";

// Sample data type
type DataItem = {
  id: number;
  code: string;
  class: string;
  parent: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    code: "1",
    class: "Asset",
    parent: "010",
  },
  {
    id: 1,
    code: "1",
    class: "Liabilities",
    parent: "011",
  },
  {
    id: 1,
    code: "1",
    class: "Capital and Reserves",
    parent: "012",
  },
  {
    id: 1,
    code: "1",
    class: "Incomes",
    parent: "013",
  },
  {
    id: 1,
    code: "1",
    class: "Expenses",
    parent: "014",
  },
];

const headers = [
  { content: <>S/N</> },
  { content: <> Ledger Class Name</> },
  { content: <> ID</> },
];

// Custom row render function
const renderRow = (item: DataItem, index: number) => (
  <tr
    key={index}
    className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
  >
    <td className="py-1 px-4">{item.code}</td>
    <td className="py-1 px-4">{item.class}</td>
    <td className="py-1 px-4">{item.parent}</td>
  </tr>
);

const LedgerClassTable = () => {
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

export default LedgerClassTable;
