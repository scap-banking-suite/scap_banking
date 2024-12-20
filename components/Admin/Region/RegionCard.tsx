import { CallIcon, MailIcon, ThreeDotIcon } from "@/icons/svgComp/RegionIcons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import userAvatar from "@/icons/svgs/UserAvatar.svg";
import Image from "next/image";
import { RegionDataItem } from "@/components/api/crud/region";

type dataType = {
  value: RegionDataItem;
};

const RegionCard = ({ value }: dataType) => {
  return (
    <div className="flex flex-col border border-accountBg rounded-[15px] h-[210px]">
      <section className="bg-[#fff] h-[111px] px-4 py-2 rounded-t-[15px]">
        <aside className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{value?.name}</h3>
          <div className="cursor-pointer">
            <ThreeDotIcon />
          </div>
        </aside>
        <p className="text-sm text-regionGrayText">
          32 branches | {value?.country || "Nigeria"}
        </p>
      </section>
      <section className="bg-accountBg h-[111px] px-4 py-2 rounded-b-[15px]">
        <h3 className="text-lg font-medium">Regional Manager</h3>

        <div className="flex gap-5 mt-2">
          <Avatar className="w-[30px] h-[30px] rounded-2xl">
            <AvatarImage src={userAvatar} />
            <AvatarFallback className="rounded-2xl">
              <Image src={userAvatar} width={30} height={30} alt="user" />
            </AvatarFallback>
          </Avatar>
          <aside className="flex flex-col gap-[2px] text-black">
            <h4 className="text-sm font-medium ">
              {value?.regionalManagerName}
            </h4>
            {value?.regionalManagerEmail && (
              <p className="text-[12px] font-medium text-regionGrayText flex items-center gap-2">
                <MailIcon />
                {value?.regionalManagerEmail}
              </p>
            )}
            {value?.regionalManagerPhone && (
              <p className="text-[12px] font-medium text-regionGrayText flex items-center gap-2">
                <CallIcon />
                {value?.regionalManagerPhone}
              </p>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
};

export default RegionCard;
