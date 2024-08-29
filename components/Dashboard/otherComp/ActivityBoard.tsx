import React from "react";
import { ActivityDataType } from "../menubars/Rightbar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

type props = {
  activitiesData: ActivityDataType;
};

const ActivityBoard = ({ activitiesData }: props) => {
  return (
    <div className="">
      <h4 className="text-sm font-normal text-black my-5">Activities</h4>
      {activitiesData.map((activity, index) => (
        <div key={index} className="">
          {/* Vertical Line */}
          {/* {index > 0 && (
            <div className="h-[18px] w-px bg-black bg-opacity-10 ml-[11px]" />
          )} */}

          {/* User Image */}
          <main className="flex gap-2 ">
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
              <p className="text-xs font-normal text-black opacity-40 mt-1">
                {activity?.time}
              </p>
            </div>
          </main>

          {/* Vertical Line */}
          {index !== activitiesData?.length - 1 && (
            <div className="h-[18px] w-px bg-black bg-opacity-10 ml-[11px] mb-0.5" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ActivityBoard;
