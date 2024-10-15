import { CustomButton } from "@/components/clickable/CustomButton";
import { AddIcon } from "@/icons/svgComp/RegionIcons";

const EmptyRegionState = () => {
  return (
    <div className="">
      <p className="text-center text-sm mb-5">No Region created </p>
      <CustomButton
        variant="primary"
        className="rounded-[9px] w-[378px] font-normal h-[46px]"
        icon={AddIcon}
      >
        Add Region
      </CustomButton>
    </div>
  );
};

export default EmptyRegionState;
