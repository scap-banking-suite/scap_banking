import React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

type ModalHeaderProps = {
  title: string;
  description?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const ModalHeader = ({ title, icon: Icon, description }: ModalHeaderProps) => {
  return (
    <div className="bg-white sticky top-0 z-10">
      <h1 className="text-2xl font-medium text-darkBlue mb-4">{title}</h1>
      <div className="flex justify-end mb-7">
        <SheetPrimitive.Close className="  ">
          <div className="text-[#0B0F19] flex items-center gap-2.5">
            <span className=" font-semibold text-base">{description}</span>
            {Icon && <Icon className="h-5 w-5 font-semibold " />}
          </div>
        </SheetPrimitive.Close>
      </div>
    </div>
  );
};
