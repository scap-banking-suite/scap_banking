import OperationsTableComp from "@/components/Operations/OperationsTableComp";
import { ThreeDotIcon } from "@/icons/svgComp/RegionIcons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import userAvatar from "@/icons/svgs/UserAvatar.svg";
import Image from "next/image";
import { RegionDataItem, Region } from "@/components/api/type";

type listType = {
  regionListData: Region["data"];
};

const headers = [
  { content: <>SN</> },
  { content: <> Region</> },
  { content: <>R. Manager</> },
  { content: <> </> },
];

// Custom row render function
const renderRow = (item: RegionDataItem, index: number) => (
  <tr
    key={index}
    className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
  >
    <td className="py-1 px-4">{item.id}</td>
    <td className="py-1 px-4 flex flex-col text-lg font-medium text-black">
      {item.name}
      <p className="text-sm text-regionGrayText mt-1">32 branches | Nigeria</p>
    </td>

    <td className="py-1 px-4 text-sm ">
      <span className="flex items-center gap-3">
        <Avatar className="w-[30px] h-[30px] rounded-2xl">
          <AvatarImage src={userAvatar} />
          <AvatarFallback className="rounded-2xl">
            <Image src={userAvatar} width={30} height={30} alt="user" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col font-medium text-black text-sm">
          regina adams{" "}
          <p className="text-[12px] font-medium text-regionGrayText">
            s.emeka@bank.com | 08166559955
          </p>
        </div>
      </span>
    </td>
    <td className="py-1 px-4 cursor-pointer">
      <ThreeDotIcon />
    </td>
  </tr>
);

const RegionList = ({ regionListData }: listType) => {
  return (
    <div className="bg-[#E7EEFA]">
      <OperationsTableComp
        headers={headers}
        data={regionListData}
        renderRow={renderRow}
      />
    </div>
  );
};

export default RegionList;
