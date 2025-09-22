import { BsSpeedometer2 } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { HiCodeBracket } from "react-icons/hi2";
import { PiChartLineUpBold } from "react-icons/pi";

// Navitem
type NavType = {
  page: string;
  link: string;
};
export const navItems: NavType[] = [
  { page: "Home", link: "/" },
  { page: "About Us", link: "/about" },
  { page: "Service", link: "/service" },
  { page: "Solutions", link: "/solutions" },
  { page: "Portfolio", link: "/portfolio" },
  { page: "Patner With Us", link: "/partner" },
  { page: "Contact", link: "contact" },
];

type Services = {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
};

export const servicesItems: Services[] = [
  {
    icon: HiCodeBracket,
    text: "SaaS Development",
  },
  {
    icon: PiChartLineUpBold,
    text: "Affiliate Marketing  ",
  },
  {
    icon: BsSpeedometer2,
    text: "Automation Tools",
  },
  {
    icon: CiGlobe,
    text: "Digital Services",
  },
];
