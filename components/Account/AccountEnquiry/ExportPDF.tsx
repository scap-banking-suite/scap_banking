import SkeletonTableLoader from "@/components/Dashboard/otherComp/SkeletonTableLoader";
import ViewAccInput from "../ViewAccInput";
import GenerateProfile from "../ViewAccount/GenerateProfile";

const ExportPDF = () => {
  return (
    <main>
      <div className="my-10">
        <ViewAccInput
          type="text"
          placeholder="Enter Customer Account No."
          buttonLabel="Export PDF"
        />
      </div>
      <section className="bg-white rounded-[30px] px-5 py-5">
        <GenerateProfile />
        <SkeletonTableLoader />
      </section>
    </main>
  );
};

export default ExportPDF;
