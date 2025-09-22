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
  headText: string;
  subText?: string;
  list?: string[];
};

export const servicesItems: Services[] = [
  {
    icon: HiCodeBracket,
    headText: "SaaS Development",
    subText:
      "Custom SaaS platforms built with modern technologies, scalable architecture, and user-centric design.",
    list: [
      "Cloud solution architecture design",
      "Multi-tenant platform development",
      "Subscription management systems",
      "Scalable infrastructure planning",
      "API integration strategy",
    ],
  },
  {
    icon: PiChartLineUpBold,
    headText: "Affiliate Marketing",
    subText:
      "Comprehensive affiliate marketing solutions that maximize conversions and build profitable partnerships.",
    list: [
      "Performance marketing strategy",
      "Partner network development",
      "Commission structure optimization",
      "Tracking technology implementation",
      "ROI analytics and reporting",
    ],
  },
  {
    icon: BsSpeedometer2,
    headText: "Automation Tools",
    subText:
      "Intelligent automation solutions that streamline operations and boost productivity across your business.",
    list: [
      "Workflow automation design",
      "Process efficiency assessment",
      "Custom automation development",
      "Integration capability planning",
      "Performance monitoring systems",
    ],
  },
  {
    icon: CiGlobe,
    headText: "Digital Services",
    subText:
      "End-to-end digital transformation services that modernize your business for the digital age.",
    list: [
      "Digital transformation roadmap",
      "Online presence optimization",
      "Digital tool implementation",
      "Service delivery automation",
      "Customer experience enhancement",
    ],
  },
];

// type Services = {
//   headText: string;
//   subText: string;
//   icon: React.ComponentType<{ className?: string }>;
//   list: string;
// };

// export const OurServices: Services[] = [{
//     headText: "",
//     subText: "",
//     icon: ,
//     list: ""
// },
// {
//     headText: "",
//     subText: "",
//     icon: ,
//     list: ""
// },{
//     headText: "",
//     subText: "",
//     icon: ,
//     list: ""
// }]
