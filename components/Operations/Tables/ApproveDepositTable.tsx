import { CustomButton } from "@/components/clickable/CustomButton";

import { SquareDotIcon } from "@/icons/svgComp/TableIcons";
import OperationsTableComp from "../OperationsTableComp";

// Sample data type
type DataItem = {
  id: number;
  customerId: string;
  RequestLoggedBy: string;
  CustomerName: string;
  DepositAmount: number;
  InterestAmountPayable: string;
  LiqDateRequested: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    customerId: "01",
    RequestLoggedBy: "June 7th",
    CustomerName: "Description...",
    DepositAmount: 0,
    InterestAmountPayable: "3 month",
    LiqDateRequested: "Account ",
  },
  {
    id: 1,
    customerId: "01",
    RequestLoggedBy: "June 7th",
    CustomerName: "Description...",
    DepositAmount: 0,
    InterestAmountPayable: "3 month",
    LiqDateRequested: "Account ",
  },
  {
    id: 1,
    customerId: "01",
    RequestLoggedBy: "June 7th",
    CustomerName: "Description...",
    DepositAmount: 0,
    InterestAmountPayable: "3 month",
    LiqDateRequested: "Account ",
  },
  {
    id: 1,
    customerId: "01",
    RequestLoggedBy: "June 7th",
    CustomerName: "Description...",
    DepositAmount: 0,
    InterestAmountPayable: "3 month",
    LiqDateRequested: "Account ",
  },
  {
    id: 1,
    customerId: "01",
    RequestLoggedBy: "June 7th",
    CustomerName: "Description...",
    DepositAmount: 0,
    InterestAmountPayable: "3 month",
    LiqDateRequested: "Account ",
  },
  {
    id: 1,
    customerId: "01",
    RequestLoggedBy: "June 7th",
    CustomerName: "Description...",
    DepositAmount: 0,
    InterestAmountPayable: "3 month",
    LiqDateRequested: "Account ",
  },
  {
    id: 1,
    customerId: "01",
    RequestLoggedBy: "June 7th",
    CustomerName: "Description...",
    DepositAmount: 0,
    InterestAmountPayable: "3 month",
    LiqDateRequested: "Account ",
  },
  {
    id: 1,
    customerId: "01",
    RequestLoggedBy: "June 7th",
    CustomerName: "Description...",
    DepositAmount: 0,
    InterestAmountPayable: "3 month",
    LiqDateRequested: "Account ",
  },
  {
    id: 1,
    customerId: "01",
    RequestLoggedBy: "June 7th",
    CustomerName: "Description...",
    DepositAmount: 0,
    InterestAmountPayable: "3 month",
    LiqDateRequested: "Account ",
  },
  {
    id: 1,
    customerId: "01",
    RequestLoggedBy: "June 7th",
    CustomerName: "Description...",
    DepositAmount: 0,
    InterestAmountPayable: "3 month",
    LiqDateRequested: "Account ",
  },
];

const headers = [
  { content: <>CustomerId</> },
  { content: <>Request Logged By</> },
  { content: <> Customer Name</> },
  { content: <> Deposit Amount</> },
  { content: <> Interest Amount Payable</> },
  { content: <> Liq Date Requested</> },
];

// Custom row render function
const renderRow = (item: DataItem, index: number) => (
  <tr
    key={index}
    className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
  >
    <td className="py-1 px-4">{item.customerId}</td>
    <td className="py-1 px-4">{item.RequestLoggedBy}</td>
    <td className="py-1 px-4">{item.CustomerName}</td>

    <td className="py-1 px-4">{item?.DepositAmount?.toFixed(2)}</td>
    <td className="py-1 px-4">{item.InterestAmountPayable}</td>
    <td className="py-1 px-4">{item.LiqDateRequested}</td>
  </tr>
);

const ApproveDepositTable = () => {
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

export default ApproveDepositTable;
