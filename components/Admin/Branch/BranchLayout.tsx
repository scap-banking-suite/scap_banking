"use client";
import { AddIcon, ListView, SortIcon } from "@/icons/svgComp/RegionIcons";

import RegionSearchComp from "../Region/RegionSearchComp";
import { useState } from "react";
import BranchCard from "./BranchCard";
import BranchList from "./BranchList";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { BranchFormModal } from "../Region/BranchFormModal";
import { useBranches } from "@/components/api/crud/branch";
import EmptyRegionState from "../Region/EmptyRegionState";
import SkeletonTableLoader from "@/components/Dashboard/otherComp/SkeletonTableLoader";

const BranchLayout = () => {
  const [view, setView] = useState("grid");
  const [isOpen, setIsOpen] = useState(false);

  const { getBranchLists } = useBranches();
  const { data: branchList, isPending } = getBranchLists();

  const branchListData = branchList?.data || [];

  const toggleView = () => {
    setView((prevView) => (prevView === "grid" ? "list" : "grid"));
  };

  return (
    <section className="bg-white rounded-[30px] px-6 py-6 mt-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-8">
          <aside
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleView}
          >
            <h3 className="text-sm font-medium">
              {view === "list" ? "Grid view" : "List view"}
            </h3>
            <ListView />
          </aside>
          <aside className="flex items-center gap-2">
            <h3 className="text-sm font-medium">Sort</h3>
            <SortIcon />
          </aside>
        </div>
        <RegionSearchComp className="w-[424px]" />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <div className="flex items-center gap-2 text-black cursor-pointer">
              <p className="text-darkBlue">Add Branch</p>
              <AddIcon />
            </div>
          </SheetTrigger>
          <BranchFormModal setIsOpen={setIsOpen} />
        </Sheet>
      </div>
      <main className="my-4">
        {isPending ? (
          <SkeletonTableLoader />
        ) : view === "grid" ? (
          branchListData?.length > 0 ? (
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {branchListData?.map((item, index) => (
                <div key={index}>
                  <BranchCard value={item} />
                </div>
              ))}
            </section>
          ) : (
            <div className="flex h-[50vh] items-center mx-auto w-1/2">
              <EmptyRegionState title="Branch" />
            </div>
          )
        ) : (
          <div>
            {branchListData?.length > 0 ? (
              <BranchList branchListData={branchListData} />
            ) : (
              <div className="flex h-[50vh] items-center mx-auto w-1/2">
                <EmptyRegionState title="Branch" />
              </div>
            )}
          </div>
        )}
      </main>
    </section>
  );
};

export default BranchLayout;
