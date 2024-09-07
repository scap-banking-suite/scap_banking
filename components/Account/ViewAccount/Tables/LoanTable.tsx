import { CustomButton } from "@/components/clickable/CustomButton";
import TableComponent from "../../TableComp";
import { ReceiptIcon, SquareDotIcon } from "@/icons/svgComp/TableIcons";

// Sample data type
type DataItem = {
  id: number;
  loanID: string;
  Next: string;
  Last: string;
  status: string;
  Installments: number;
  limit: number;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    loanID: "0123456789",
    Next: "15 Mar 2024, 12:47 PM",
    Last: "15 June 2025, 12:47 PM",
    status: "Active",
    Installments: 2004321,
    limit: 0,
  },
  {
    id: 2,
    loanID: "0123456789",
    Next: "15 Mar 2024, 12:47 PM",
    Last: "15 June 2025, 12:47 PM",
    status: "Active",
    Installments: 32004321,
    limit: 0,
  },
  {
    id: 3,
    loanID: "0123456789",
    Next: "15 Mar 2024, 12:47 PM",
    Last: "15 June 2025, 12:47 PM",
    status: "Active",
    Installments: 32004321,
    limit: 0,
  },
  {
    id: 4,
    loanID: "0123456789",
    Next: "15 Mar 2024, 12:47 PM",
    Last: "15 June 2025, 12:47 PM",
    status: "Active",
    Installments: 32004321,
    limit: 0,
  },
  {
    id: 5,
    loanID: "0123456789",
    Next: "15 Mar 2024, 12:47 PM",
    Last: "15 June 2025, 12:47 PM",
    status: "Active",
    Installments: 32004321,
    limit: 0,
  },
];

const headers = [
  { content: <>Loan ID</> },
  { content: <>Next Repayment Date</> },
  // { content: <><FaEnvelope className="inline-block mr-1" /> Action</> },
  { content: <> Last Repayment Date</> },
  { content: <> Status</> },
  { content: <> No of Installments Left</> },
  { content: <> Re. Limit</> },
];

// Custom row render function
const renderRow = (item: DataItem, index: number) => (
  <tr
    key={index}
    className="bg-accountBg w-full text-[13px] text-left font-normal h-[50px]"
  >
    <td className="py-1 px-4 font-medium">{item.loanID}</td>
    <td className="py-1 px-4">
      <span className="flex justify-center items-center gap-2 text-nowrap ">
        <ReceiptIcon />

        {item?.Next}
      </span>
    </td>
    <td className="py-1 px-4">
      <span className="flex justify-center items-center gap-2 text-nowrap">
        <ReceiptIcon />

        {item?.Last}
      </span>
    </td>
    <td className="py-1 px-4 align-middle">
      <span className="bg-[#E1FCEF] text-[#14804A] rounded-sm flex justify-center items-center gap-2 h-[22px] w-[70px]">
        <SquareDotIcon />
        {item?.status}
      </span>
    </td>
    <td className="py-1 px-4">N{item?.Installments?.toLocaleString()}</td>
    <td className="py-1 px-4">{item?.limit?.toFixed(2)}</td>
  </tr>
);

const LoanTable = () => {
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

export default LoanTable;
