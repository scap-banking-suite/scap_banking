import { StateLGA, StateLGAItem } from "@/components/api/crud/stateLga";
import OperationsTableComp from "@/components/Operations/OperationsTableComp";
import { ThreeDotIcon } from "@/icons/svgComp/RegionIcons";

type listType = {
  listData: StateLGA["data"];
};

const headers = [
  { content: <>Code</> },
  { content: <>Name</> },
  { content: <> Area Type</> },
  { content: <> Parent</> },
  { content: <> </> },
];

// Custom row render function
const renderRow = (item: StateLGAItem, index: number) => (
  <tr
    key={index}
    className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
  >
    <td className="py-1 px-4">{item?.code}</td>
    <td className="py-1 px-4">{item?.name}</td>
    <td className="py-1 px-4">{item?.stateOrLgaOrCountry}</td>
    <td className="py-1 px-4">{item?.parentId}</td>
    <td className="py-1 px-4 cursor-pointer">
      <ThreeDotIcon />
    </td>
  </tr>
);

const GeoTable = ({ listData }: listType) => {
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

export default GeoTable;
