"use client";
import { ResetIcon, SortIcon } from "@/icons/svgComp/RegionIcons";

import { AuthUser } from "@/components/api/type";
import { CustomButton } from "@/components/clickable/CustomButton";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import RegionSearchComp from "@/components/Admin/Region/RegionSearchComp";
import ApprovalListTable from "./ApprovalListTable";
import { useEffect, useState } from "react";
import { useLedgerList } from "@/components/api/crud/ledgerList";
import SkeletonTableLoader from "@/components/Dashboard/otherComp/SkeletonTableLoader";
import Pagination from "@/components/ui/Pagination";

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
  {
    name: "referal",
    type: "text",
    errorMessage: "Select a reference",
    isRequired: true,
  },
  {
    name: "account_type",
    type: "text",
    errorMessage: "Enter Type",
    isRequired: true,
  },
  {
    name: "account_status",
    type: "text",
    errorMessage: "Enter Status",
    isRequired: true,
  },
];

const ApprovalListLayout = () => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});

  const showList = [
    { value: "20", label: "10" },
    { value: "10", label: "20" },
    { value: "4", label: "4" },
  ];

  const { getMessageList, getApprovalists } = useLedgerList();
  const { data: lists } = getMessageList();

  const MessageConfigId = lists?.data?.[0]?.configId;
  const { data: applists, isPending } = getApprovalists(MessageConfigId, `NEW`);
  const listData = applists?.data || [];

  const totalEntries = listData?.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredListData = listData?.filter((item) => {
    return item?.branchCode.toLowerCase()?.includes(searchTerm?.toLowerCase());
    // item?.ledgerClassID.toLowerCase().includes(searchTerm.toLowerCase()) ||
    // item?.parentID.toLowerCase().includes(searchTerm.toLowerCase())
  });

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = listData?.slice(indexOfFirstEntry, indexOfLastEntry);

  useEffect(() => {
    setCurrentPage(1);
  }, [entriesPerPage, searchTerm]);

  const handleEntriesPerPageChange = (value: string) => {
    setEntriesPerPage(Number(value));
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term); // Update search term
  };

  return (
    <section className="bg-white rounded-[30px] px-6 py-6 mt-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-3 items-center ">
          <aside className="flex items-center gap-2 -mb-2">
            <h3 className="text-xs font-normal">Show</h3>
            <CustomSelect
              name="bank"
              options={showList}
              control={control}
              rules={{ required: true }}
              placeholder="10"
              className="bg-transparent h-[40px] w-[69px] rounded-[10px]"
            />
          </aside>

          <RegionSearchComp className="w-[401px]" />
        </div>
        <div className="flex items-center gap-3">
          <CustomButton
            variant="primary"
            className="rounded-[10px] bg-lightButton text-darkBlue w-fit text-xs h-[40px] "
            icon={SortIcon}
            label="Filter"
          />

          <CustomButton
            variant="primary"
            className="rounded-[10px] bg-lightButton text-darkBlue w-fit text-xs h-[40px] "
            icon={ResetIcon}
            label="Reset Filter"
          />
        </div>
      </div>
      <main className="my-4">
        {isPending ? (
          <SkeletonTableLoader />
        ) : filteredListData?.length > 0 ? (
          <ApprovalListTable listData={currentEntries} />
        ) : (
          <div className="flex items-center justify-center text-center text-sm mb-5 h-[20vh]">There are no Pending Approval data</div>
        )}
        {filteredListData?.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalEntries={totalEntries}
            entriesPerPage={entriesPerPage}
            onPageChange={(page: any) => setCurrentPage(page)}
          />
        )}
      </main>
    </section>
  );
};

export default ApprovalListLayout;
