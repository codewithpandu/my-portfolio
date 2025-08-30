import LogoImage from "@/public/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="body-font bg-slate-900">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Image src={LogoImage} alt="logo" width={40} priority />
        <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Pandu Setia Darmawan
        </p>
      </div>
    </footer>
  );
}
