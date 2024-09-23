import { CustomButton } from "@/components/clickable/CustomButton";

import { SquareDotIcon } from "@/icons/svgComp/TableIcons";
import OperationsTableComp from "@/components/Operations/OperationsTableComp";

// Sample data type
type DataItem = {
  id: number;
  serial: string;
  dateCreated: string;
  type: string;
  description: string;
  DepositAmount: number;
  dateStarted: string;
  tenure: string;
  DebitAmount: number;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    serial: "01",
    dateCreated: "June 7th",
    type: "Savings",
    description: "Description...",
    DepositAmount: 0,
    dateStarted: "June 1st",
    tenure: "3 month",
    DebitAmount: 0,
  },
  {
    id: 1,
    serial: "01",
    dateCreated: "June 7th",
    type: "Savings",
    description: "Description...",
    DepositAmount: 0,
    dateStarted: "June 1st",
    tenure: "3 month",
    DebitAmount: 0,
  },
  {
    id: 1,
    serial: "01",
    dateCreated: "June 7th",
    type: "Savings",
    description: "Description...",
    DepositAmount: 0,
    dateStarted: "June 1st",
    tenure: "3 month",
    DebitAmount: 0,
  },
  {
    id: 1,
    serial: "01",
    dateCreated: "June 7th",
    type: "Savings",
    description: "Description...",
    DepositAmount: 0,
    dateStarted: "June 1st",
    tenure: "3 month",
    DebitAmount: 0,
  },
  {
    id: 1,
    serial: "01",
    dateCreated: "June 7th",
    type: "Savings",
    description: "Description...",
    DepositAmount: 0,
    dateStarted: "June 1st",
    tenure: "3 month",
    DebitAmount: 0,
  },
  {
    id: 1,
    serial: "01",
    dateCreated: "June 7th",
    type: "Savings",
    description: "Description...",
    DepositAmount: 0,
    dateStarted: "June 1st",
    tenure: "3 month",
    DebitAmount: 0,
  },
  {
    id: 1,
    serial: "01",
    dateCreated: "June 7th",
    type: "Savings",
    description: "Description...",
    DepositAmount: 0,
    dateStarted: "June 1st",
    tenure: "3 month",
    DebitAmount: 0,
  },
  {
    id: 1,
    serial: "01",
    dateCreated: "June 7th",
    type: "Savings",
    description: "Description...",
    DepositAmount: 0,
    dateStarted: "June 1st",
    tenure: "3 month",
    DebitAmount: 0,
  },
  {
    id: 1,
    serial: "01",
    dateCreated: "June 7th",
    type: "Savings",
    description: "Description...",
    DepositAmount: 0,
    dateStarted: "June 1st",
    tenure: "3 month",
    DebitAmount: 0,
  },
  {
    id: 1,
    serial: "01",
    dateCreated: "June 7th",
    type: "Savings",
    description: "Description...",
    DepositAmount: 0,
    dateStarted: "June 1st",
    tenure: "3 month",
    DebitAmount: 0,
  },
];

const headers = [
  { content: <>Serial</> },
  { content: <>Date Created</> },
  { content: <> Type</> },
  { content: <> Description</> },
  { content: <> Amount</> },
  { content: <> StartDate</> },
  { content: <> Tenure</> },
  { content: <> Debit Account</> },
];

// Custom row render function
const renderRow = (item: DataItem, index: number) => (
  <tr
    key={index}
    className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
  >
    <td className="py-1 px-4">{item.serial}</td>
    <td className="py-1 px-4">{item.dateCreated}</td>
    <td className="py-1 px-4">{item.type}</td>
    <td className="py-1 px-4">{item.description}</td>

    <td className="py-1 px-4">{item?.DepositAmount?.toFixed(2)}</td>
    <td className="py-1 px-4">{item.dateStarted}</td>
    <td className="py-1 px-4">{item.tenure}</td>
    <td className="py-1 px-4">{item?.DebitAmount?.toFixed(2)}</td>
  </tr>
);

const ApproveAccrusalTable = () => {
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

export default ApproveAccrusalTable;
