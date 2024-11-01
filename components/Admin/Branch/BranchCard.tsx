import { CallIcon, MailIcon, ThreeDotIcon } from "@/icons/svgComp/RegionIcons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import userAvatar from "@/icons/svgs/UserAvatar.svg";
import Image from "next/image";
import { BranchDataItem } from "@/components/api/crud/branch";

type dataType = {
  value: BranchDataItem;
};

const BranchCard = ({ value }: dataType) => {
  return (
    <div className="flex flex-col border border-accountBg rounded-[15px] h-[210px]">
      <section className="bg-[#fff] h-[111px] px-4 py-2 rounded-t-[15px]">
        <aside className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{value?.branchName}</h3>
          <div className="cursor-pointer">
            <ThreeDotIcon />
          </div>
        </aside>
        <p className="text-sm text-regionGrayText">
          {value?.branchAddress} | {value?.branchState}
        </p>
      </section>
      <section className="bg-accountBg h-[111px] px-4 py-2 rounded-b-[15px]">
        <h3 className="text-lg font-medium">Branch Manager</h3>

        <div className="flex gap-5 mt-2">
          <Avatar className="w-[30px] h-[30px] rounded-2xl">
            <AvatarImage src={userAvatar} />
            <AvatarFallback className="rounded-2xl">
              <Image src={userAvatar} width={30} height={30} alt="user" />
            </AvatarFallback>
          </Avatar>
          <aside className="flex flex-col gap-[2px] text-black">
            <h4 className="text-sm font-medium ">{value?.branchManager}</h4>
            {value?.region?.regionalManagerEmail && (
              <p className="text-[12px] font-medium text-regionGrayText flex items-center gap-2">
                <MailIcon />
                {value?.region?.regionalManagerEmail}
              </p>
            )}

            <p className="text-[12px] font-medium text-regionGrayText flex items-center gap-2">
              <CallIcon />
              {value?.branchMobile}
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default BranchCard;
