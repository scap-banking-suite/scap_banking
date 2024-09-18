import SkeletonTableLoader from "@/components/Dashboard/otherComp/SkeletonTableLoader";
import ViewAccInput from "../ViewAccInput";
import GenerateProfile from "../ViewAccount/GenerateProfile";

const BVNInformation = () => {
  return (
    <main>
      <div className="my-10">
        <ViewAccInput
          type="text"
          placeholder="Enter Bank Verification Number"
          buttonLabel="Validate BVN"
        />
      </div>
      <section className="bg-white rounded-[30px] px-5 py-5">
        <GenerateProfile />
        <SkeletonTableLoader />
      </section>
    </main>
  );
};

export default BVNInformation;
