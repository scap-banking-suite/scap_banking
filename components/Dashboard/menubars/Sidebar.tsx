"use client";
import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BankX from "@/icons/svgs/logo.svg";
import Image from "next/image";

import Link from "next/link";

import { DropdownIconUP } from "@/icons/svgComp/DropdownIcon";
import {
  AccountIcon,
  AdminIcon,
  ChannelIcon,
  CollectionsIcon,
  DashboardIcon,
  FinanceIcon,
  OperationsIcon,
} from "@/icons/svgComp/BarIcons";

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
        name: "View Account",
        link: "/accounts/view-account",
        icon: <DashboardIcon />,
      },
      {
        name: "Account Enquiry",
        link: "/accounts/account-enquiry",
        icon: <DashboardIcon />,
      },
      {
        name: "Add Alert Subscribers",
        link: "/accounts/add-alerts-subscribers",
        icon: <DashboardIcon />,
      },
      {
        name: "Add Corporate Director",
        link: "/accounts/add-corporate-director",
        icon: <DashboardIcon />,
      },
      {
        name: "Alert Management",
        link: "/accounts/alerts-management",
        icon: <DashboardIcon />,
      },
      {
        name: "Alert Management Report",
        link: "/accounts/alerts-management-report",
        icon: <DashboardIcon />,
      },
      {
        name: "Approve Alert Subscribers",
        link: "/accounts/approve-alert-subscribers",
        icon: <DashboardIcon />,
      },
      {
        name: "Customer Update Request",
        link: "/accounts/customer-update-request",
        icon: <DashboardIcon />,
      },
      {
        name: "BVN Information",
        link: "/accounts/BVN-information",
        icon: <DashboardIcon />,
      },
      {
        name: "Confirm Bank Statements",
        link: "/accounts/confirm-bank-statements",
        icon: <DashboardIcon />,
      },
      {
        name: "Create Corporate Customer",
        link: "/accounts/create-corporate-customer",
        icon: <DashboardIcon />,
      },
      {
        name: "General Ledger",
        link: "/accounts/general-ledger",
        icon: <DashboardIcon />,
      },
      {
        name: "Product Management",
        link: "/accounts/product-management",
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
        name: "Regions and Branches",
        link: "/admin/regions-and-branches",
        icon: <DashboardIcon />,
      },
      {
        name: "LookUp / Enums",
        link: "/admin/lookup-enums",
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
        link: "/channels/overview",
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
        link: "/collections/overview",
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
        name: "Approve Pending Prepayment",
        link: "/finance/approve-pending-prepayments",
        icon: <DashboardIcon />,
      },
      {
        name: "Asset Depreciation Report",
        link: "/finance/asset-depreciation-report",
        icon: <DashboardIcon />,
      },
      {
        name: "Asset Depreciation Report by Asset",
        link: "/finance/asset-depreciation-report-by-asset",
        icon: <DashboardIcon />,
      },
      {
        name: "Statement of Financial Position",
        link: "/finance/statement-financial-position",
        icon: <DashboardIcon />,
      },
      {
        name: "Total Cost of Funds",
        link: "/finance/total-cost-funds",
        icon: <DashboardIcon />,
      },
      {
        name: "Fixed Assets Register Section",
        link: "/finance/fixed-assets-register",
        icon: <DashboardIcon />,
      },
      {
        name: "Statement of Comprehensive Income",
        link: "/finance/statement-comprehensive-income",
        icon: <DashboardIcon />,
      },
      {
        name: "Loan Listing Report",
        link: "/finance/loan-listing-report",
        icon: <DashboardIcon />,
      },
      {
        name: "Prepayment & Accruals",
        link: "/finance/prepayment-accruals",
        icon: <DashboardIcon />,
      },
      {
        name: "Spool GL by Date",
        link: "/finance/spool-gl",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    name: "Operations",
    icon: <OperationsIcon />,
    link: "/operations",
    isDrop: true,
    dropdownItems: [
      {
        name: "Account Enquiry",
        link: "/operations/account-enquiry",
        icon: <DashboardIcon />,
      },
      {
        name: "Acoount Linking Form",
        link: "/operations/account-link-form",
        icon: <DashboardIcon />,
      },
      {
        name: "Approve Deposits Liquidation",
        link: "/operations/approve-deposits-liquidation",
        icon: <DashboardIcon />,
      },
      {
        name: "Authorize Fixed Deposit",
        link: "/operations/authorize-fixed-deposits",
        icon: <DashboardIcon />,
      },
      {
        name: "Fixed Deposit",
        link: "/operations/fixed-deposits",
        icon: <DashboardIcon />,
      },
      {
        name: "Fees & Charges",
        link: "/operations/fees-&-charges",
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
        link: "/reports/overview",
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
        link: "/risk-approval/overview",
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
        link: "/teller/overview",
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
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-darkBlue text-white h-screen w-[16%] overflow-y-scroll scrollbar-hidden"
      >
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
                    openDropdownIndex === index ||
                    activeLink.includes(item.name)
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
                      animate={{
                        rotate: openDropdownIndex === index ? 180 : 0,
                      }}
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
                        className="ml-3 mt-2"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.dropdownItems?.map((dropdownItem, idx) => (
                          <li key={idx} className="mb-2">
                            <Link
                              href={dropdownItem.link}
                              className={`flex items-center rounded-[10px] px-3 py-3 cursor-pointer hover:bg-primary w-full ${
                                activeLink === dropdownItem.link
                                  ? "bg-primary"
                                  : ""
                              }`}
                              onClick={() => handleLinkClick(dropdownItem.link)}
                            >
                              <p>{dropdownItem.icon}</p>
                              <span className="ml-2 text-xs">
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
      </motion.div>
    </AnimatePresence>
  );
};
