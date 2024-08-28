'use client'
import { CustomButton } from "@/components/clickable/CustomButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  return (
    <main className="flex bg-primary text-white min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Scap Banking</h1>
      <CustomButton className="w-[428px]" onClick={() => router.push('/dashboard/overview')}>Dashboard</CustomButton>
      <h1 className="text-2xl">Welcome to Scap Banking</h1>
      {/* <h1 className="text-2xl" style={{ fontFamily: "PoppinsNormal" }}>Welcome to Scap </h1>
      <h1 className="text-2xl" style={{ fontFamily: "SatoshiBold" }}>Welcome Scap g </h1>
      <h1 className="text-2xl" style={{ fontFamily: "GraphikMedium" }}>Welcome Scap bank $101.2k</h1> */}
    </main>
  );
}
