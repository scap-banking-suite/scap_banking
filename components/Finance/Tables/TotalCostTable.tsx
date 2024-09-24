import { CustomButton } from "@/components/clickable/CustomButton";

import { SquareDotIcon } from "@/icons/svgComp/TableIcons";
import OperationsTableComp from "@/components/Operations/OperationsTableComp";

// Sample data type
type DataItem = {
  id: number;
  depositBalance: string;
  dueDate: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    depositBalance: "01",
    dueDate: "3 month",
  },
  {
    id: 1,
    depositBalance: "01",
    dueDate: "3 month",
  },
  {
    id: 1,
    depositBalance: "01",
    dueDate: "3 month",
  },
  {
    id: 1,
    depositBalance: "01",
    dueDate: "3 month",
  },
  {
    id: 1,
    depositBalance: "01",
    dueDate: "3 month",
  },
  {
    id: 1,
    depositBalance: "01",
    dueDate: "3 month",
  },
  {
    id: 1,
    depositBalance: "01",
    dueDate: "3 month",
  },
  {
    id: 1,
    depositBalance: "01",
    dueDate: "3 month",
  },
  {
    id: 1,
    depositBalance: "01",
    dueDate: "3 month",
  },
  {
    id: 1,
    depositBalance: "01",
    dueDate: "3 month",
  },
];

const headers = [
  { content: <>Total of deposit balance</> },
  { content: <> Due date</> },
];

// Custom row render function
const renderRow = (item: DataItem, index: number) => (
  <tr
    key={index}
    className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
  >
    <td className="py-1 px-4">{item.depositBalance}</td>
    <td className="py-1 px-4">{item.dueDate}</td>
  </tr>
);

const TotalCostTable = () => {
  return (
    <div className="bg-[#E7EEFA]">
      <OperationsTableComp
        headers={headers}
        data={sampleData}
        renderRow={renderRow}
      />
    </div>
  );
};

export default TotalCostTable;
