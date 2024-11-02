"use client";
import { CustomButton } from "@/components/clickable/CustomButton";
import { AddIcon } from "@/icons/svgComp/RegionIcons";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useState, ReactNode, Dispatch, SetStateAction } from "react";
import { RegionFormModal } from "./RegionFormModal";
import { BranchFormModal } from "./BranchFormModal";
import { SectorFormModal } from "../LookUp/SectorFormModal";
import { NewApprovalFormModal } from "../LookUp/NewApprovalFormModal";
import { ListFormModal } from "@/components/Account/GeneralLedger/List/ListFormModal";
import { LedgerFormModal } from "@/components/Account/GeneralLedger/LedgerList/LedgerFormModal";

// Hook to map titles to their respective form components
const useFormModal = (title: string, setIsOpen: Dispatch<SetStateAction<boolean>>): ReactNode => {
  const formModals: Record<string, ReactNode> = {
    Branch: <BranchFormModal setIsOpen={setIsOpen} />,
    Sector: <SectorFormModal setIsOpen={setIsOpen} />,
    List: <ListFormModal setIsOpen={setIsOpen} />,
    "Geo Area": <NewApprovalFormModal setIsOpen={setIsOpen} />,
    "Ledger List": <LedgerFormModal setIsOpen={setIsOpen} />,
    default: <RegionFormModal setIsOpen={setIsOpen} />, // Default fallback
  };

  return formModals[title] || formModals.default;
};

const EmptyRegionState = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const FormModal = useFormModal(title, setIsOpen); // Get the correct modal component

  return (
    <div>
      <p className="text-center text-sm mb-5">No {title} created</p>
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
        {FormModal}
      </Sheet>
    </div>
  );
};

export default EmptyRegionState;
