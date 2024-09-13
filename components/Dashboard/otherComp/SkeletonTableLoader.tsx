import { Skeleton } from "@/components/ui/skeleton";

const SkeletonTableLoader = () => {
  return (
    <div className="my-6">
      <Skeleton className="w-full h-[38px] bg-accountBg" />
      <section className="mt-10 space-y-1">
        <Skeleton className="w-full h-[50px] bg-accountBg" />
        <Skeleton className="w-full h-[50px] bg-accountBg" />
        <Skeleton className="w-full h-[50px] bg-accountBg" />
        <Skeleton className="w-full h-[50px] bg-accountBg" />
        <Skeleton className="w-full h-[50px] bg-accountBg" />
      </section>
    </div>
  );
};

export default SkeletonTableLoader;
