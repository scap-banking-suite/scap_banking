import { CustomButton } from "@/components/clickable/CustomButton";

type searchProp = {
  className?: string;
};

const RegionSearchComp = ({ className }: searchProp) => {
  return (
    <div
      className={`rounded-[20px] bg-accountBg h-[36px] flex items-center justify-between pl-4 py-[2px] ${className}`}
    >
      <input
        type="text"
        placeholder="Search"
        className="w-[70%] bg-transparent outline-none border-none h-[36px] placeholder:text-placeholderText text-sm"
      />
      <CustomButton
        variant="primary"
        label="Search"
        className="rounded-[20px] w-[30%] text-sm h-[36px] font-medium"
      />
    </div>
  );
};

export default RegionSearchComp;
