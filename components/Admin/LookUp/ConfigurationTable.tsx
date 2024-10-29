import { Config, ConfigDataItem } from "@/components/api/type";
import OperationsTableComp from "@/components/Operations/OperationsTableComp";
import { ThreeDotIcon } from "@/icons/svgComp/RegionIcons";

type listType = {
  approvalListData: Config["data"];
};

const headers = [
  { content: <>Code</> },
  { content: <>Module Name</> },
  { content: <> Module Path</> },
  { content: <> Configured</> },
  { content: <> </> },
];

// Custom row render function
const renderRow = (item: ConfigDataItem, index: number) => (
  <tr
    key={index}
    className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
  >
    <td className="py-1 px-4">{item?.configId}</td>
    <td className="py-1 px-4">{item?.moduleName}</td>
    <td className="py-1 px-4">{item?.modulePath}</td>
    <td className="py-1 px-4">{item?.isConfigured ? "True" : "False"}</td>

    <td className="py-1 px-4 cursor-pointer">
      <ThreeDotIcon />
    </td>
  </tr>
);

const ConfigurationTable = ({ approvalListData }: listType) => {
  return (
    <div className="bg-[#E7EEFA]">
      <OperationsTableComp
        headers={headers}
        data={approvalListData}
        renderRow={renderRow}
      />
    </div>
  );
};

export default ConfigurationTable;
