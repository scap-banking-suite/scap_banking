import { CustomButton } from "@/components/clickable/CustomButton";
import TableComponent from "../../TableComp";
import { SquareDotIcon } from "@/icons/svgComp/TableIcons";

// Sample data type
type DataItem = {
  id: number;
  account: string;
  class: string;
  status: string;
  balance: number;
  limit: number;
  update: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    account: "0123456789",
    class: "Savings",
    status: "Active",
    balance: 2004321,
    limit: 0,
    update: "Account Maintenance",
  },
  {
    id: 2,
    account: "0123456789",
    class: "Target Savings",
    status: "Active",
    balance: 32004321,
    limit: 0,
    update: "Account Maintenance",
  },
];

const headers = [
  { content: <>Account No.</> },
  { content: <>Class of Account</> },
  // { content: <><FaEnvelope className="inline-block mr-1" /> Action</> },
  { content: <> Status</> },
  { content: <> Account Balance</> },
  { content: <> OD Limit</> },
  { content: <> Update</> },
];

// Custom row render function
const renderRow = (item: DataItem, index: number) => (
  <tr
    key={index}
    className="bg-accountBg w-full text-[13px] text-left font-medium"
  >
    <td className="py-1 px-4">{item.account}</td>
    <td className="py-1 px-4">{item.class}</td>
    <td className="py-1 px-4 align-middle">
      <span className="bg-[#E1FCEF] text-[#14804A] rounded-sm flex justify-center items-center gap-2 h-[22px] w-[70px]">
        <SquareDotIcon />
        {item?.status}
      </span>
    </td>
    <td className="py-1 px-4">N{item?.balance?.toLocaleString()}</td>
    <td className="py-1 px-4">{item?.limit?.toFixed(2)}</td>
    <td className="py-1 px-4">
      <CustomButton
        variant="primary"
        label={item?.update}
        className="text-nowrap "
      />
    </td>
  </tr>
);

const AccountTable = () => {
  return (
    <div>
      <TableComponent
        headers={headers}
        data={sampleData}
        renderRow={renderRow}
      />
    </div>
  );
};

export default AccountTable;
