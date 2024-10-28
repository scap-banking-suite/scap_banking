"use client";

import { Sector, SectorDataItem } from "@/components/api/type";
import OperationsTableComp from "@/components/Operations/OperationsTableComp";
import { ThreeDotIcon } from "@/icons/svgComp/RegionIcons";

type listType = {
  sectorListData: Sector["data"];
};

const headers = [
  { content: <>Code</> },
  { content: <>Sector Name</> },
  { content: <> Category</> },
  { content: <> Description</> },
  { content: <> </> },
];

// Custom row render function
const renderRow = (item: SectorDataItem, index: number) => (
  <tr
    key={index}
    className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
  >
    <td className="py-1 px-4">{item?.code}</td>
    <td className="py-1 px-4">{item?.sectorName}</td>
    <td className="py-1 px-4">{item?.category}</td>
    <td className="py-1 px-4">{item?.sectorDescription}</td>
    <td className="py-1 px-4 cursor-pointer">
      <ThreeDotIcon />
    </td>
  </tr>
);

const SectorTable = ({ sectorListData }: listType) => {
  return (
    <div className="bg-[#E7EEFA]">
      <OperationsTableComp
        headers={headers}
        data={sectorListData}
        renderRow={renderRow}
      />
    </div>
  );
};

export default SectorTable;
