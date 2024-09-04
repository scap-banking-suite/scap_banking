"use client";
import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BankX from "@/icons/svgs/logo.svg";
import Image from "next/image";

import Link from "next/link";

import { DropdownIconUP } from "@/icons/svgComp/DropdownIcon";
import { AccountIcon, AdminIcon, ChannelIcon, CollectionsIcon, DashboardIcon, FinanceIcon, OperationsIcon } from "@/icons/svgComp/SidebarIcons";

type Props = {};

type SidebarItem = {
  name: string;
  icon: ReactNode;
  link?: string;
  isDrop: boolean;
  dropdownItems?: Array<{ name: string; link: string; icon?: ReactNode }>;
};

const sidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    isDrop: true,
    dropdownItems: [
      {
        name: "Overview",
        link: "/dashboard/overview",
        icon: <DashboardIcon />,
      },
      { name: "Loans", link: "/dashboard/loans", icon: <DashboardIcon /> },
    ],
  },
  {
    name: "Accounts",
    icon: <AccountIcon />,
    link: "/accounts",
    isDrop: true,
    dropdownItems: [
      {
        name: "Overview",
        link: "/dashboard/overview",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    name: "Admin",
    icon: <AdminIcon />,
    link: "/accounts",
    isDrop: true,
    dropdownItems: [
      {
        name: "Overview",
        link: "/dashboard/overview",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    name: "Channels",
    icon: <ChannelIcon />,
    link: "/accounts",
    isDrop: true,
    dropdownItems: [
      {
        name: "Overview",
        link: "/dashboard/overview",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    name: "Collections & Recov.",
    icon: <CollectionsIcon />,
    link: "/accounts",
    isDrop: true,
    dropdownItems: [
      {
        name: "Overview",
        link: "/dashboard/overview",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    name: "Finance",
    icon: <FinanceIcon />,
    link: "/accounts",
    isDrop: true,
    dropdownItems: [
      {
        name: "Overview",
        link: "/dashboard/overview",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    name: "Operations",
    icon: <OperationsIcon />,
    link: "/accounts",
    isDrop: true,
    dropdownItems: [
      {
        name: "Overview",
        link: "/dashboard/overview",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    name: "Reports",
    icon: <DashboardIcon />,
    link: "/accounts",
    isDrop: true,
    dropdownItems: [
      {
        name: "Overview",
        link: "/dashboard/overview",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    name: "Risk Approval",
    icon: <DashboardIcon />,
    link: "/accounts",
    isDrop: true,
    dropdownItems: [
      {
        name: "Overview",
        link: "/dashboard/overview",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    name: "Teller",
    icon: <DashboardIcon />,
    link: "/accounts",
    isDrop: true,
    dropdownItems: [
      {
        name: "Overview",
        link: "/dashboard/overview",
        icon: <DashboardIcon />,
      },
    ],
  },
];

export const Sidebar = ({}: Props) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [activeLink, setActiveLink] = useState<string>("Dashboard");

  const handleToggle = (index: number) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="bg-darkBlue text-white h-screen w-[16%] overflow-y-scroll scrollbar-hidden">
      <div className="p-4">
        {/* Logo */}
        <div className="mb-6">
          <Image src={BankX} alt="BankX" />
        </div>

        {/* Menu Items */}
        <ul>
          <h6 className="text-sm font-medium py-3 text-white">MENU</h6>
          {sidebarItems.map((item, index) => (
            <li key={index} className="">
              <div
                className={`flex items-center justify-between rounded-[10px] px-3 py-3 hover:bg-primary cursor-pointer ${
                  openDropdownIndex === index || activeLink.includes(item.name)
                    ? "bg-primary"
                    : ""
                }`}
                onClick={() => {
                  handleToggle(index);
                  if (item.link) handleLinkClick(item.link);
                }}
              >
                <div className="flex items-center">
                  <p>{item.icon}</p>
                  <span className="ml-2 text">
                    {item.name?.length > 15
                      ? `${item?.name?.substring(0, 15) + "."}`
                      : item?.name}
                  </span>
                </div>
                {item.isDrop && (
                  <motion.div
                    animate={{ rotate: openDropdownIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4 flex items-center justify-center"
                  >
                    <DropdownIconUP />
                  </motion.div>
                )}
              </div>

              {item.isDrop && (
                <AnimatePresence>
                  {openDropdownIndex === index && (
                    <motion.ul
                      className="ml-7 mt-2"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.dropdownItems?.map((dropdownItem, idx) => (
                        <li key={idx} className="mb-2">
                          <Link
                            href={dropdownItem.link}
                            className={`flex items-center rounded-[10px] px-3 py-3 cursor-pointer hover:bg-primary w-10/12 ${
                              activeLink === dropdownItem.link
                                ? "bg-primary"
                                : ""
                            }`}
                            onClick={() => handleLinkClick(dropdownItem.link)}
                          >
                            <p>{dropdownItem.icon}</p>
                            <span className="ml-2 text-sm">
                              {dropdownItem.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
