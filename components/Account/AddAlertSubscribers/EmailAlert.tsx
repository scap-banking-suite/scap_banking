import { CustomButton } from "@/components/clickable/CustomButton";
import ViewAccInput from "../ViewAccInput";

const EmailAlert = () => {
  return (
    <main className="my-20 w-8/12 mx-auto">
      <div className="my-10 space-y-5">
        <ViewAccInput
          type="text"
          placeholder="Enter Customer Account No."
          buttonLabel="Checking..."
        />
        <ViewAccInput
          type="text"
          placeholder="Account Name - Auto Generated from NUBAN"
        />
        <ViewAccInput type="text" placeholder="Enter Email Address" />
        <CustomButton
          variant="primary"
          label={"Add Subscriber"}
          className="rounded-[40px] w-full h-[50px] font-[500]"
        />
      </div>
    </main>
  );
};

export default EmailAlert;
