import { CustomButton } from "@/components/clickable/CustomButton";
import ViewAccInput from "../ViewAccInput";
import SelectAccInput from "../SelectAccInput";
import { useState } from "react";

type Option = {
  value: string;
  label: string;
};

const ManageCustomerNotification = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const banklist: Option[] = [
    { value: "uba", label: "UBA" },
    { value: "gtbank", label: "Gtbank" },
    { value: "zenith", label: "Zenith" },
  ];

  return (
    <main className="my-20 w-8/12 mx-auto">
      <div className="my-10 space-y-5">
        <ViewAccInput
          type="text"
          placeholder="Enter Customer ID"
          buttonLabel="Checking..."
        />
        <ViewAccInput
          type="text"
          placeholder="Account Name - Auto Generated from NUBAN"
        />
        <SelectAccInput
          options={banklist}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
        <CustomButton
          variant="primary"
          label={"Unsubscribe Account"}
          className="rounded-[40px] w-full h-[50px] font-[500]"
        />
      </div>
    </main>
  );
};

export default ManageCustomerNotification;
