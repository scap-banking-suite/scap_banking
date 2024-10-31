import OperationsTableComp from "@/components/Operations/OperationsTableComp";
import Pagination from "@/components/ui/Pagination";
import { ThreeDotIcon } from "@/icons/svgComp/RegionIcons";
import { SquareDotIcon } from "@/icons/svgComp/TableIcons";

// Sample data type
type DataItem = {
  id: number;
  code: string;
  product: string;
  feature: string;
  ledger: string;
  status: string;
  value: string;
  isFlat: string;
  description: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    code: "1",
    product: "Ledger Name",
    feature: "region",
    ledger: "branch",
    status: "Approved",
    value: "class",
    isFlat: "isFlat",
    description: "description",
  },
];

const headers = [
  { content: <>S/N</> },
  { content: <>Product</> },
  { content: <> Product Feature</> },
  { content: <> Ledger</> },
  { content: <> Status</> },
  { content: <> Value</> },
  { content: <> IsFlats</> },
  { content: <> Description</> },
];

// Custom row render function
const renderRow = (item: DataItem, index: number) => (
  <tr
    key={index}
    className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
  >
    <td className="py-1 px-4">{item.code}</td>
    <td className="py-1 px-4">{item.product}</td>
    <td className="py-1 px-4">{item.feature}</td>
    <td className="py-1 px-4">{item.ledger}</td>
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
    <td className="py-1 px-4">{item.value}</td>
    <td className="py-1 px-4">{item.isFlat}</td>
    <td className="py-1 px-4">{item.description}</td>
  </tr>
);

const ProductTable = () => {
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

export default ProductTable;
