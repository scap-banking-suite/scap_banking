import { CustomButton } from "@/components/clickable/CustomButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-primary text-white min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Scap Banking</h1>
      <CustomButton className="w-[428px]">Click me</CustomButton>
    </main>
  );
}
