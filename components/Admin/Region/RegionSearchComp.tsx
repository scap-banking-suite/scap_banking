'use cllent'
import { CustomButton } from "@/components/clickable/CustomButton";
import { useState } from "react";

type SearchProp = {
  className?: string;
  onSearch?: any 
};


const RegionSearchComp = ({ className, onSearch }: SearchProp) => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div
      className={`rounded-[20px] bg-accountBg h-[36px] flex items-center justify-between pl-4 py-[2px] ${className}`}
    >
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-[70%] bg-transparent outline-none border-none h-[36px] placeholder:text-placeholderText text-sm"
      />
      <CustomButton
        variant="primary"
        label="Search"
        className="rounded-[20px] w-[30%] text-sm h-[36px] font-medium"
        onClick={handleSearch} 
      />
    </div>
  );
};

export default RegionSearchComp;
