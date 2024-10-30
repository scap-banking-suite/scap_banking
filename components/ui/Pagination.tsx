import { ArrowLeft, ArrowRight } from "@/icons/svgComp/ArrowD";

const Pagination = () => {
  return (
    <div className="bg-white border-b border-operationBg py-4">
      <section className="flex justify-between items-center">
        <p className="text-sm font-normal text-[#949699]">
          Showing 1 to 10 of 40 entries
        </p>
        <div className="flex gap-4 items-center cursor-pointer">
          <ArrowLeft />
          <div className="flex items-center justify-between gap-1 rounded-[29px] bg-[#F3F2F7] h-[29px]  w-[125px]">
            <p className="rounded-[29px] h-[29px] w-[29px] text-white bg-[#001F56] flex items-center justify-center">
              1
            </p>
            <p className="rounded-[29px] h-[29px] w-[29px] flex items-center justify-center">
              2
            </p>
            <p className="rounded-[29px] h-[29px] w-[29px] flex items-center justify-center">
              3
            </p>
            <p className="rounded-[29px] h-[29px] w-[29px] flex items-center justify-center">
              4
            </p>
          </div>
          <ArrowRight />
        </div>
      </section>
    </div>
  );
};

export default Pagination;
