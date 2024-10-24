"use client";
import { CustomButton } from "@/components/clickable/CustomButton";
import { AddIcon } from "@/icons/svgComp/RegionIcons";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { RegionFormModal } from "./RegionFormModal";
import { BranchFormModal } from "./BranchFormModal";

const EmptyRegionState = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <p className="text-center text-sm mb-5">No {title} created </p>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <CustomButton
            variant="primary"
            className="rounded-[9px] w-[378px] font-normal h-[46px]"
            icon={AddIcon}
          >
            Add {title}
          </CustomButton>
        </SheetTrigger>
        {title === "Branch" ? (
          <BranchFormModal setIsOpen={setIsOpen} />
        ) : (
          <RegionFormModal setIsOpen={setIsOpen} />
        )}
      </Sheet>
    </div>
  );
};

export default EmptyRegionState;
