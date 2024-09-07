import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import userAvatar from "@/icons/svgs/UserAvatar.svg";
import Image from "next/image";
import { CustomButton } from "@/components/clickable/CustomButton";

const GenerateProfile = () => {
  return (
    <article className="flex justify-between items-center px-3 py-3 border border-[#E9E9E9] rounded-2xl">
      <div className="flex gap-5">
        <Avatar className="w-[80px] h-[80px] rounded-2xl">
          <AvatarImage src="" />
          <AvatarFallback className="rounded-2xl">
            <Image src={userAvatar} width={80} height={80} alt="user" />
          </AvatarFallback>
        </Avatar>
        <aside className="flex flex-col gap-1 text-black">
          <h4 className="text-sm font-semibold">Ismail Abubakar Muhammed</h4>
          <p className="text-[11px] font-normal">ismailabu@gmail.com</p>
          <p className="text-[11px] font-normal">
            43, Abubakar Cresent, Maitama, FCT
          </p>
          <p className="text-[11px] font-normal">09123456789</p>
        </aside>
      </div>
      <div className="w-[25%]">
        <CustomButton
          variant="primary"
          label="Generate Statement"
          className="rounded-[20px] w-full text-sm h-[40px] font-[300]"
        />
      </div>
    </article>
  );
};

export default GenerateProfile;
