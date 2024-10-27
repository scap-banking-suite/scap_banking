"use client";
import { AddIcon, SortIcon } from "@/icons/svgComp/RegionIcons";
import { useState } from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useRegions } from "@/components/api/crud/region";
import RegionSearchComp from "../Region/RegionSearchComp";
import { CustomButton } from "@/components/clickable/CustomButton";
import GeoTable from "./GeoTable";

const GeoLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              Add New Geo Area
            </CustomButton>
          </SheetTrigger>
        </Sheet>
      </div>
      <main className="my-4">
        <GeoTable />
      </main>
    </section>
  );
};

export default GeoLayout;
