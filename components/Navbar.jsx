"use client";

import { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import LogoImage from "@/public/logo.png";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="flex p-5 items-center justify-between md:justify-around text-white bg-slate-900">
      <div>
        <div className="flex gap-3 items-center">
          <Image src={LogoImage} alt="Logo" width={40}></Image>
          {/* <h1 className="text-2xl font-bold">Pandu Setia</h1> */}
        </div>
      </div>

      <div>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <nav>
          <div className={`${!isOpen ? "hidden " : "block "} md:block`}>
            <ul className="absolute bg-slate-900 top-20 left-0 right-0 bottom-0 flex flex-col items-center gap-5 md:static md:flex-row md:me-5 md:gap-10">
              <li>
                <NavLink url="#about_me">About Me</NavLink>
              </li>
              <li>
                <NavLink url="#skills">Skills</NavLink>
              </li>
              <li>
                <NavLink url="#portfolio">Portfolio</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
