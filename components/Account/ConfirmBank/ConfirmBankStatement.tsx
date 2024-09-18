import SkeletonTableLoader from "@/components/Dashboard/otherComp/SkeletonTableLoader";
import ViewAccInput from "../ViewAccInput";
import GenerateProfile from "../ViewAccount/GenerateProfile";

const ConfirmBankStatement = () => {
  return (
    <main>
      <div className="my-10 flex items-center justify-between w-full gap-4">
        <ViewAccInput
          className="w-full"
          type="text"
          placeholder="Ticket No."
          buttonLabel="Checking.."
        />
        <ViewAccInput
          className="w-full"
          type="text"
          placeholder="Password"
          buttonLabel="Process"
        />
      </div>
      <section className="bg-white rounded-[30px] px-5 py-5">
        <GenerateProfile />
        <SkeletonTableLoader />
      </section>
    </main>
  );
};

export default ConfirmBankStatement;
