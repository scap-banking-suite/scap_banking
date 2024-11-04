"use client";
import { AddIcon, ResetIcon, SortIcon } from "@/icons/svgComp/RegionIcons";

import { AuthUser } from "@/components/api/type";
import { CustomButton } from "@/components/clickable/CustomButton";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import RegionSearchComp from "@/components/Admin/Region/RegionSearchComp";
import LedgerListTable from "./LedgerListTable";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { LedgerFormModal } from "./LedgerFormModal";
import { useEffect, useState } from "react";
import { useLedgerList } from "@/components/api/crud/ledgerList";
import SkeletonTableLoader from "@/components/Dashboard/otherComp/SkeletonTableLoader";
import EmptyRegionState from "@/components/Admin/Region/EmptyRegionState";
import Pagination from "@/components/ui/Pagination";

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
  
];

const LedgerListLayout = () => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});

  const showList = [
    { value: "20", label: "10" },
    { value: "10", label: "20" },
    { value: "4", label: "4" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const { getLedgerList } = useLedgerList();
  const { data: lists, isPending } = getLedgerList();

  const listData = lists?.data || [];

  const totalEntries = listData?.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredListData = listData?.filter((item) => {
    return item?.acctName?.toLowerCase()?.includes(searchTerm?.toLowerCase());
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
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <CustomButton
                variant="primary"
                className="rounded-[10px] w-[60px] bg-lightButton font-normal h-[40px] text-darkBlue text-xs px-1"
                icon={AddIcon}
              >
                Add
              </CustomButton>
            </SheetTrigger>
            <LedgerFormModal setIsOpen={setIsOpen} />
          </Sheet>

          <RegionSearchComp onSearch={handleSearch} className="w-[401px]" />
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
          <LedgerListTable listData={currentEntries} />
        ) : (
          <div className="flex h-[50vh] items-center mx-auto w-1/2">
            <EmptyRegionState title="Ledger List" />
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          onPageChange={(page: any) => setCurrentPage(page)}
        />
      </main>
    </section>
  );
};

export default LedgerListLayout;
