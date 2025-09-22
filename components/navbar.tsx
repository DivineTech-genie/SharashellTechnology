"use client";

import React from "react";
import { Button } from "./ui/button";
import { navItems } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div>
      <div className="hidden lg:flex bg-secondary-foreground text-primary-foreground h-screen md:h-16 text-sm items-center">
        <div className="container mx-auto hidden md:flex gap-5">
          <p className="flex items-center gap-2">
            <BiTimeFive className="text-secondary-background" /> Hours: Mon-Fri:
            9am-6pm
          </p>
          <p className="flex items-center gap-2">
            <FaLocationDot className="text-secondary-background" /> 30 N Gould
            St, STE R, Sheridan, WY 82801, USA
          </p>
          <p className="flex items-center gap-2">
            <FaLocationDot className="text-secondary-background" />
            No 128 Owerri Road, Behind ABC, tranport, Enugu State, 400001, NGA
          </p>
          <p className="flex items-center gap-2">
            <MdEmail className="text-secondary-background" />{" "}
            contact@sharalap.com
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between max-w-11/12 lg:container mx-auto py-5 border-gray-700 border-b-1">
        <div className="flex justify-between items-center gap-5">
          <h1 className="text-primary-foreground text-3xl lg:text-4xl">
            Sharashell Technology
          </h1>

          <ul className="hidden lg:flex gap-5">
            {navItems.map((item) => (
              <Link
                href={item.link}
                key={item.page}
                className={
                  item.link === pathName
                    ? "text-secondary-background font-bold"
                    : "text-primary-foreground font-semibold hover:text-secondary-background "
                }
              >
                <li>{item.page}</li>
              </Link>
            ))}
          </ul>
        </div>
        <Button size={"lg"} className="hidden lg:block ">
          Get Started
        </Button>

        <div className="lg:hidden">
          <HiOutlineMenu fontSize={34} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
