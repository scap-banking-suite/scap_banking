import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";


type ModalFooterProps = {
  className?: string;
  children: ReactNode;
};

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => {
  return (
    <footer className={cn(" sticky bottom-5 bg-white", className)}>
      {children}
    </footer>
  );
};


