"use client";

import { ArrowLeft, ArrowRight } from "@/icons/svgComp/ArrowD";

interface PaginationProps {
  currentPage?: any;
  totalEntries?: any;
  entriesPerPage?: any;
  onPageChange?: any;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalEntries,
  entriesPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="bg-white border-b border-operationBg py-4">
      <section className="flex justify-between items-center">
        <p className="text-sm font-normal text-[#949699]">
          Showing {entriesPerPage * (currentPage - 1) + 1} to{" "}
          {Math.min(entriesPerPage * currentPage, totalEntries)} of{" "}
          {totalEntries} entries
        </p>
        <div className="flex gap-4 items-center cursor-pointer">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`disabled:cursor-not-allowed`}
          >
            <ArrowLeft />
          </button>
          <div className="flex items-center justify-between gap-1 rounded-[29px] bg-[#F3F2F7] h-[29px] w-[125px]">
            {pageNumbers.map((page) => (
              <p
                key={page}
                className={`rounded-[29px] h-[29px] w-[29px] flex items-center justify-center ${
                  currentPage === page ? "text-white bg-[#001F56]" : ""
                }`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </p>
            ))}
          </div>
          <button
            onClick={handleNextPage}
            className={`disabled:cursor-not-allowed`}
            disabled={currentPage === totalPages}
          >
            <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pagination;
