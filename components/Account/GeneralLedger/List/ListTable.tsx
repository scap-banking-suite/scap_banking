import OperationsTableComp from "@/components/Operations/OperationsTableComp";
import Pagination from "@/components/ui/Pagination";
import { ThreeDotIcon } from "@/icons/svgComp/RegionIcons";

// Sample data type
type DataItem = {
  id: number;
  code: string;
  class: string;
  name: string;
  parent: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    code: "1",
    name: "Ledger Name",
    class: "Ledger Class",
    parent: "Ledger Parent",
  },
  {
    id: 1,
    code: "1",
    name: "Ledger Name",
    class: "Ledger Class",
    parent: "Ledger Parent",
  },
  {
    id: 1,
    code: "1",
    name: "Ledger Name",
    class: "Ledger Class",
    parent: "Ledger Parent",
  },
];

const headers = [
  { content: <>S/N</> },
  { content: <>Ledger Name</> },
  { content: <> Ledger Class</> },
  { content: <> Ledger Parent</> },
  { content: <> </> },
];

// Custom row render function
const renderRow = (item: DataItem, index: number) => (
  <tr
    key={index}
    className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
  >
    <td className="py-1 px-4">{item.code}</td>
    <td className="py-1 px-4">{item.name}</td>
    <td className="py-1 px-4">{item.class}</td>
    <td className="py-1 px-4">{item.parent}</td>
    <td className="py-1 px-4 cursor-pointer"> </td>
  </tr>
);

const ListTable = () => {
  return (
    <div className="bg-[#E7EEFA]">
      <OperationsTableComp
        headers={headers}
        data={sampleData}
        renderRow={renderRow}
      />
      <Pagination/>
    </div>
  );
};

export default ListTable;
