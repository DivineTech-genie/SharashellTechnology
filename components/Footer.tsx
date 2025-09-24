import { navItems } from "@/lib/types";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";

const Footer = () => {
  return (
    <section className="bg-terciary-background text-white">
      <div className="grid md:grid-cols-3 gap-5 py-10 md:pt-20 lg:container max-w-11/12 mx-auto border-b-2 border-gray-700">
        <div className="grid gap-4">
          <h1 className="headText font-semibold">Sharashell Technology</h1>
          <p>
            U.S.-based technology company specializing in SaaS development,
            affiliate marketing solutions, and automation tools for businesses
            worldwide.
          </p>

          <p>
            <span className="text-secondary-background flex gap-2 items-center">
              <FaLocationDot className="text-secondary-background" />
              United States:{" "}
            </span>{" "}
            30 N Gould St, STE R, Sheridan, WY 82801, USA
          </p>
          <p>
            <span className="text-secondary-background flex gap-2 items-center">
              <FaLocationDot />
              Nigeria:
            </span>{" "}
            No 128 Owerri Road, Behind ABC, tranport, Enugu State, Enugu, Enugu
            400001, NGA
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Quicklinks</h2>
          <ul className="flex flex-col gap-2">
            {navItems.map((items, i) => (
              <Link href={items.link} key={i}>
                <li>{items.page}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 border-b-2 border-gray-700 pb-8">
            <h2 className="text-2xl font-semibold">ContactInfo</h2>
            <p className="flex items-center gap-2">
              <MdEmail className="text-secondary-background" />{" "}
              contact@sharalap.com
            </p>
            <p className="flex items-center gap-2">
              <PiPhoneFill className="text-secondary-background" /> + (1 628)
              2185-530
            </p>
            <p className="flex items-center gap-2">
              <PiPhoneFill className="text-secondary-background" /> +234 (806)
              612-736
            </p>
          </div>

          {/* Social media handles */}
          <div className="flex gap-2">
            <div className="border-4 border-white py-4 px-4">
              <FaFacebook fontSize={20} />
            </div>
            <div className="border-4 border-white py-4 px-4">
              <FaXTwitter fontSize={20} />
            </div>
            <div className="border-4 border-white py-4 px-4">
              <FaInstagram fontSize={20} />
            </div>
          </div>
        </div>
      </div>

      <p className="text-center p-6">
        © 2025 Sharashell Technology. All rights reserved. | EIN: in-progress
      </p>
    </section>
  );
};

export default Footer;
