import { CustomButton } from "@/components/clickable/CustomButton";
import TableComponent from "../../TableComp";
import { ReceiptIcon, SquareDotIcon } from "@/icons/svgComp/TableIcons";

// Sample data type
type DataItem = {
  id: number;
  alertId: string;
  date: string;
  status: string;
  action: string;
};

const sampleData: DataItem[] = [
  {
    id: 1,
    alertId: "Aler0123",
    date: "15 Mar 2024, 12:47 PM",
    status: "Delivered",
    action: "Resend",
  },
  {
    id: 2,
    alertId: "Aler0125",
    date: "15 Mar 2024, 12:47 PM",
    status: "Delivered",
    action: "Resend",
  },
  {
    id: 3,
    alertId: "Aler0125",
    date: "15 Mar 2024, 12:47 PM",
    status: "Delivered",
    action: "Resend",
  },
  {
    id: 4,
    alertId: "Aler0125",
    date: "15 Mar 2024, 12:47 PM",
    status: "Pending",
    action: "Resend",
  },
  {
    id: 5,
    alertId: "Aler0125",
    date: "15 Mar 2024, 12:47 PM",
    status: "Delivered",
    action: "Resend",
  },
];

const headers = [
  { content: <>Alert ID</> },
  { content: <>Alert Date & Time</> },
  { content: <> Status</> },
  { content: <> Action</> },
];

// Custom row render function
const renderRow = (item: DataItem, index: number) => (
  <tr
    key={index}
    className="bg-accountBg w-full text-[13px] text-left font-medium"
  >
    <td className="py-1 px-4">{item.alertId}</td>
    <td className="py-1 ">
      <span className="flex justify-center items-center gap-2 text-nowrap ">
        <ReceiptIcon />

        {item?.date}
      </span>
    </td>
    <td className="py-1 px-4 align-middle">
      <span
        className={` ${
          item?.status === "Pending"
            ? "bg-[#FFDEDC] text-[#FF361B]"
            : "text-[#14804A] bg-[#E1FCEF]"
        }  rounded-sm flex justify-center items-center gap-2 h-[22px] w-[92px]`}
      >
        <SquareDotIcon />
        {item?.status}
      </span>
    </td>

    <td className="py-1 px-4">
      <CustomButton
        variant="primary"
        label={item?.action}
        className="text-nowrap"
      />
    </td>
  </tr>
);

const AlertTable = () => {
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

export default AlertTable;
