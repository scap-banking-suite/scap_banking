import React from "react";
import { ActivityDataType } from "../menubars/Rightbar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

type props = {
  activeUsers: ActivityDataType;
};

const ActiveUsers = ({ activeUsers }: props) => {
  return (
    <div>
      <h4 className="text-sm font-normal text-black my-5">Active Users</h4>
      {activeUsers.map((activity, index) => (
        <div key={index} className="">
          <main className="flex gap-2 items-center mt-4 ">
            <div className="">
              <Avatar className="w-[24px] h-[24px]">
                <AvatarImage src="" />
                <AvatarFallback>
                  <Image
                    src={activity.image}
                    width={24}
                    height={24}
                    alt="profile"
                  />
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="">
              <p className="text-sm font-normal text-black">
                {activity?.description}
              </p>
            </div>
          </main>
        </div>
      ))}
    </div>
  );
};

export default ActiveUsers;
