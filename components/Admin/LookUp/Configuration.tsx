"use client";
import { AddIcon, SortIcon } from "@/icons/svgComp/RegionIcons";
import { useState } from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import RegionSearchComp from "../Region/RegionSearchComp";
import { CustomButton } from "@/components/clickable/CustomButton";
import ConfigurationTable from "./ConfigurationTable";
import { NewApprovalFormModal } from "./NewApprovalFormModal";
import { useApprovalConfig } from "@/components/api/crud/approvalConfig";
import SkeletonTableLoader from "@/components/Dashboard/otherComp/SkeletonTableLoader";
import EmptyRegionState from "../Region/EmptyRegionState";

const Configuration = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { getApprovalConfigLists } = useApprovalConfig();

  const { data: apporvalList, isPending } = getApprovalConfigLists();

  const approvalListData = apporvalList?.data || [];

  console.log(approvalListData, "sec__");

  return (
    <section className="bg-white rounded-[30px] px-6 py-6 mt-6">
      <div className="flex items-center justify-between w-full">
        <aside className="flex items-center gap-2">
          <h3 className="text-sm font-medium">Sort</h3>
          <SortIcon />
        </aside>

        <RegionSearchComp className="w-[424px]" />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <CustomButton
              variant="primary"
              className="rounded-[10px] w-[180px] bg-lightButton font-normal h-[40px] text-darkBlue text-sm px-3"
              icon={AddIcon}
            >
              Add Configuration
            </CustomButton>
          </SheetTrigger>
          <NewApprovalFormModal setIsOpen={setIsOpen} />
        </Sheet>
      </div>
      <main className="my-4">
        {isPending ? (
          <SkeletonTableLoader />
        ) : approvalListData?.length > 0 ? (
          <ConfigurationTable approvalListData={approvalListData} />
        ) : (
          <div className="flex h-[50vh] items-center mx-auto w-1/2">
            <EmptyRegionState title="Geo Area" />
          </div>
        )}
      </main>
    </section>
  );
};

export default Configuration;
