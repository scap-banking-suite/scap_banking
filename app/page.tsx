import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-primary text-white min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">Welcome to Scap Banking</h1>
      <h1 className="text-2xl" style={{ fontFamily: "PoppinsNormal" }}>Welcome to Scap </h1>
      <h1 className="text-2xl" style={{ fontFamily: "SatoshiBold" }}>Welcome Scap g </h1>
      <h1 className="text-2xl" style={{ fontFamily: "GraphikMedium" }}>Welcome Scap bank $101.2k</h1>
    </main>
  );
}
