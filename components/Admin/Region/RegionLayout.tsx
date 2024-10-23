"use client";
import { AddIcon, ListView, SortIcon } from "@/icons/svgComp/RegionIcons";
import RegionSearchComp from "./RegionSearchComp";
import RegionCard from "./RegionCard";
import { useState } from "react";
import RegionList from "./RegionList";
import EmptyRegionState from "./EmptyRegionState";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { RegionFormModal } from "./RegionFormModal";
import { useRegions } from "@/components/api/crud/region";

const RegionLayout = () => {
  const [view, setView] = useState("grid");
  const [isOpen, setIsOpen] = useState(false);

  const { getRegionLists } = useRegions();

  const { data:regionList, isPending } = getRegionLists();
  const regionListData = regionList?.data || [];

  console.log(regionListData, 'region');
  

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
              <p className="text-darkBlue">Add Region</p>
              <AddIcon />
            </div>
          </SheetTrigger>
          <RegionFormModal setIsOpen={setIsOpen} />
        </Sheet>
      </div>
      <main className="my-4">
        {/* <div className="flex h-[50vh] items-center mx-auto w-1/2">
          <EmptyRegionState />
        </div> */}
        {view === "grid" ? (
          <section className="grid grid-cols-3 gap-7">
            {[...Array(9)].map((_, index) => (
              <div key={index}>
                <RegionCard />
              </div>
            ))}
          </section>
        ) : (
          <div>
            <RegionList />
          </div>
        )}
      </main>
    </section>
  );
};

export default RegionLayout;
