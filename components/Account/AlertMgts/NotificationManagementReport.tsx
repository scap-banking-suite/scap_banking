import React from "react";
import ViewAccInput from "../ViewAccInput";
import GenerateProfile from "../ViewAccount/GenerateProfile";
import AlertTable from "./Tables/AlertTable";

const NotificationManagementReport = () => {
  return (
    <main className="w-[95%] mx-auto">
      <div className="my-10">
        <ViewAccInput
          type="text"
          placeholder="Enter Customer ID"
          buttonLabel="Load Report"
        />
      </div>
      <section className="bg-white rounded-[30px] px-5 py-5">
        <GenerateProfile />
        <h4 className="font-bold text-lg my-4">Customer Notification Report</h4>
        <section>
          <AlertTable />
        </section>
      </section>
    </main>
  );
};

export default NotificationManagementReport;
