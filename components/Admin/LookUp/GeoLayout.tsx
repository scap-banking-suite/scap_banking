"use client";
import { AddIcon, SortIcon } from "@/icons/svgComp/RegionIcons";
import { useEffect, useState } from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import RegionSearchComp from "../Region/RegionSearchComp";
import { CustomButton } from "@/components/clickable/CustomButton";
import GeoTable from "./GeoTable";
import { GeoAreaFormModal } from "./GeoAreaFormModal";
import { useStateLGA } from "@/components/api/crud/stateLga";
import Pagination from "@/components/ui/Pagination";
import EmptyRegionState from "../Region/EmptyRegionState";
import SkeletonTableLoader from "@/components/Dashboard/otherComp/SkeletonTableLoader";

const GeoLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { getStateLGA } = useStateLGA();
  const { data: stateLGAList, isPending } = getStateLGA();

  const stateLGAListData = stateLGAList?.data || [];

  const totalEntries = stateLGAListData?.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredListData = stateLGAListData?.filter((item) => {
    return item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    // item?.ledgerClassID.toLowerCase().includes(searchTerm.toLowerCase()) ||
    // item?.parentID.toLowerCase().includes(searchTerm.toLowerCase())
  });

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = stateLGAListData?.slice(indexOfFirstEntry, indexOfLastEntry);

  useEffect(() => {
    setCurrentPage(1);
  }, [entriesPerPage, searchTerm]);

  const handleEntriesPerPageChange = (value: string) => {
    setEntriesPerPage(Number(value));
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term); // Update search term
  };

  return (
    <section className="bg-white rounded-[30px] px-6 py-6 mt-6">
      <div className="flex items-center justify-between w-full">
        <aside className="flex items-center gap-2">
          <h3 className="text-sm font-medium">Sort</h3>
          <SortIcon />
        </aside>

        <RegionSearchComp onSearch={handleSearch} className="w-[424px]" />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <CustomButton
              variant="primary"
              className="rounded-[10px] w-[180px] bg-lightButton font-normal h-[40px] text-darkBlue text-sm px-3"
              icon={AddIcon}
            >
              Add New Geo Area
            </CustomButton>
          </SheetTrigger>
            <GeoAreaFormModal setIsOpen={setIsOpen} />
        </Sheet>
      </div>
      <main className="my-4">
        {isPending ? (
          <SkeletonTableLoader />
        ) : filteredListData?.length > 0 ? (
          <GeoTable listData={currentEntries} />
        ) : (
          <div className="flex h-[50vh] items-center mx-auto w-1/2">
            <EmptyRegionState title="New Geo Area" />
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          onPageChange={(page: any) => setCurrentPage(page)}
        />
      </main>
    </section>
  );
};

export default GeoLayout;
