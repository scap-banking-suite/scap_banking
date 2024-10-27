import React from "react";
import { NotificationDataType } from "../menubars/Rightbar";
import {
  BugIcon,
  SubscriptionIcon,
  UserChangeIcon,
} from "@/icons/svgComp/NotificationIcons";

type props = {
  notificationsData: NotificationDataType;
};
const NotificationBoard = ({ notificationsData }: props) => {
  type NotificationType = "bugfix" | "userRegistration" | "subscription";

  const notificationImages: Record<NotificationType, JSX.Element> = {
    bugfix: <BugIcon />,
    userRegistration: <UserChangeIcon />,
    subscription: <SubscriptionIcon />,
  };

  return (
    <div>
      <h4 className="text-sm font-normal text-black my-5">Notifications</h4>
      {notificationsData?.map((item, index) => {
        return (
          <main key={index} className="flex gap-2 mt-4">
            <div>{notificationImages[item?.type as NotificationType]}</div>
            <div className="">
              <p className="text-sm font-normal text-black">
                {item?.description}
              </p>
              <p className="text-xs font-normal text-black opacity-40 mt-1">
                {item?.time}
              </p>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default NotificationBoard;
