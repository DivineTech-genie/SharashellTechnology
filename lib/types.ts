import { BsShieldCheck, BsSpeedometer2 } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { GiSupersonicArrow } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
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
  //   { page: "Solutions", link: "/solutions" },
  { page: "Portfolio", link: "/portfolio" },
  { page: "Patner With Us", link: "/partner" },
  { page: "Contact", link: "contact" },
];

type Services = {
  icon: React.ComponentType<{ className?: string }>;
  headText: string;
  subText?: string;
  subText2?: string;
  list?: string[];
};

export const servicesItems: Services[] = [
  {
    icon: HiCodeBracket,
    headText: "SaaS Development",
    subText:
      "Custom software-as-a-service platforms built with modern technologies and scalable architecture.",
    subText2:
      "We build enterprise-grade SaaS applications using React, Node.js, Python, and cloud infrastructure that scales automatically with your user base.",
    list: [
      "Cloud-Native Architecture",
      "API-First Design",
      "Multi-Tenant Support",
      "Real-Time Analytics",
    ],
  },
  {
    icon: PiChartLineUpBold,
    headText: "Affiliate Marketing",
    subText:
      "Comprehensive affiliate marketing platforms and strategies that maximize conversions and revenue.",
    subText2:
      "Integration with major networks like PartnerStack, Impact, CJ Affiliate, and custom affiliate program development.",
    list: [
      "Partner Management",
      "Commission Tracking",
      "Performance Analytics",
      "Fraud Prevention",
    ],
  },
  {
    icon: BsSpeedometer2,
    headText: "Business Automation",
    subText:
      "Intelligent automation solutions that streamline operations and boost productivity across your organization.",
    subText2:
      "From CRM automation to marketing workflows, we help you eliminate manual tasks and focus on growth.",
    list: [
      "Workflow Automation",
      "Data Integration",
      "AI-Powered Insights",
      "Custom Integrations",
    ],
  },
  {
    icon: CiGlobe,
    headText: "Digital Transformation",
    subText:
      "End-to-end digital services that modernize your business processes and enhance customer experiences.",
    subText2:
      "Complete digital transformation services including cloud migration, security enhancement, and process optimization.",
    list: [
      "Digital Strategy",
      "Cloud Migration",
      "Legacy Modernization",
      "Security Audits",
    ],
  },
];

type CoreValuesType = {
  icon: React.ComponentType<{ className?: string }>;
  headText: string;
  subText: string;
};

export const coreValues: CoreValuesType[] = [
  {
    icon: BsShieldCheck,
    headText: "Integrity",
    subText:
      "We operate with complete transparency, honesty, and ethical business practices in all our interactions.",
  },

  {
    icon: GiSupersonicArrow,
    headText: "Excellence",
    subText:
      "We strive for perfection in every project, continuously improving our processes and delivering superior results.",
  },

  {
    icon: GoPeople,
    headText: "Partnership",
    subText:
      "We build long-term relationships based on mutual trust, respect, and shared success with our clients and partners.",
  },

  {
    icon: CiGlobe,
    headText: "Innovation",
    subText:
      "We embrace cutting-edge technologies and creative solutions to solve complex business challenges effectively.",
  },
];
