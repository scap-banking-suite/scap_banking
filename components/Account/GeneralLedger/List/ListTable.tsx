import { LedgerList, LedgerListItem } from "@/components/api/crud/ledgerList";
import OperationsTableComp from "@/components/Operations/OperationsTableComp";
import Pagination from "@/components/ui/Pagination";
import { ThreeDotIcon } from "@/icons/svgComp/RegionIcons";





type listType = {
  listData: LedgerList["data"];
};

const headers = [
  { content: <>S/N</> },
  { content: <>Ledger Name</> },
  { content: <> Ledger Class</> },
  { content: <> Ledger Parent</> },
  { content: <> </> },
];

// Custom row render function
const renderRow = (item: LedgerListItem, index: number) => (
  <tr
    key={index}
    className="bg-white w-full text-[13px] text-left font-medium text-tableText h-[40px]"
  >
    <td className="py-1 px-4">{item?.id}</td>
    <td className="py-1 px-4">{item?.name}</td>
    <td className="py-1 px-4">{item?.ledgerclass?.name}</td>
    <td className="py-1 px-4">{item?.parentID}</td>
    <td className="py-1 px-4 cursor-pointer"> </td>
  </tr>
);

const ListTable = ({listData}: listType) => {
  return (
    <div className="bg-[#E7EEFA]">
      <OperationsTableComp
        headers={headers}
        data={listData}
        renderRow={renderRow}
      />
      {/* <Pagination/> */}
    </div>
  );
};

export default ListTable;
