"use client";
import { AddIcon, ResetIcon, SortIcon } from "@/icons/svgComp/RegionIcons";

import { AuthUser, ID } from "@/components/api/type";
import { CustomButton } from "@/components/clickable/CustomButton";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import RegionSearchComp from "@/components/Admin/Region/RegionSearchComp";
import ListTable from "./ListTable";
import { useState } from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { ListFormModal } from "./ListFormModal";
import { useLedgerList } from "@/components/api/crud/ledgerList";
import SkeletonTableLoader from "@/components/Dashboard/otherComp/SkeletonTableLoader";
import EmptyRegionState from "@/components/Admin/Region/EmptyRegionState";

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

const ListLayout = () => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});

  const [isOpen, setIsOpen] = useState(false);
  const showList = [
    { value: "20", label: "10" },
    { value: "10", label: "20" },
    { value: "4", label: "4" },
  ];

  const { getLists } = useLedgerList();
  const { data: lists, isPending } = getLists();

  const listData = lists?.data || [];

  console.log(listData, "list_data__");

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
            <ListFormModal setIsOpen={setIsOpen} />
          </Sheet>

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
        ) : listData?.length > 0 ? (
          <ListTable listData={listData} />
        ) : (
          <div className="flex h-[50vh] items-center mx-auto w-1/2">
            <EmptyRegionState title="List" />
          </div>
        )}
      </main>
    </section>
  );
};

export default ListLayout;
