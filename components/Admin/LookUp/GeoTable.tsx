import OperationsTableComp from "@/components/Operations/OperationsTableComp";
import { ThreeDotIcon } from "@/icons/svgComp/RegionIcons";

// Sample data type
type DataItem = {
  id: number;
  code: string;
  areaType: string;
  name: string;
  description: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    code: "01",
    name: "Apapa",
    areaType: "LGA",
    description: "Lagos",
  },
  {
    id: 1,
    code: "01",
    name: "Apapa",
    areaType: "LGA",
    description: "Lagos",
  },
  {
    id: 1,
    code: "01",
    name: "Apapa",
    areaType: "LGA",
    description: "Lagos",
  },
];

const headers = [
  { content: <>Code</> },
  { content: <>Name</> },
  { content: <> Area Type</> },
  { content: <> Parent</> },
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
    <td className="py-1 px-4">{item.areaType}</td>
    <td className="py-1 px-4">{item.description}</td>
    <td className="py-1 px-4 cursor-pointer">
      <ThreeDotIcon />
    </td>
  </tr>
);

const GeoTable = () => {
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

export default GeoTable;
