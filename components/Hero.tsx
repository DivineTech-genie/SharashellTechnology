"use client";
import { servicesItems } from "@/lib/types";
import { Button } from "./ui/button";
import Link from "next/link";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { IoHome } from "react-icons/io5";

let headText: string;
let imgSrs: string;
let subText: string;
let page: string;

const Hero = () => {
  const pathName = usePathname();

  switch (pathName) {
    case "/":
      imgSrs = "/image/home-hero-img.jpg";
      headText =
        "Powering Your Business with SaaS Solutions & Affiliate Marketing";
      subText =
        "Sharashell Technology delivers cutting-edge SaaS development, affiliate marketing solutions, and automation tools that drive growth for businesses and create profitable partnerships.";
      page = "Home";
      break;

    case "/about":
      imgSrs = "/image/about-hero-img.jpg";
      headText = "Building the Future of Digital Business";
      subText =
        "Founded in Wyoming, USA, Sharashell Technology is a registered technology company dedicated to empowering businesses through innovative SaaS solutions and strategic affiliate marketing partnerships.";
      page = "About Us";
      break;

    case "/service":
      imgSrs = "/image/service-hero-img.jpg";
      headText = "Comprehensive Technology Solutionsfor Modern Businesses";
      subText =
        "From custom SaaS development to advanced affiliate marketing automation, we deliver end-to-end solutions that scale with your business and drive measurable results.";
      page = "Services";
      break;

    case "/portfolio":
      imgSrs = "/image/portfolio-hero-img.jpeg";
      headText = "Building the Future of Digital Business";
      subText =
        "Founded in Wyoming, USA, Sharashell Technology is a registered technology company dedicated to empowering businesses through innovative SaaS solutions and strategic affiliate marketing partnerships.";
      page = "Portfolio";
      break;

    case "/partner":
      imgSrs = "/image/portfolio-hero-img.jpeg";
      headText = "Partner with Sharashell Technologyfor Mutual Success";
      subText =
        "Join our trusted network of affiliate partners and unlock lucrative opportunities with a U.S.-registered technology company that delivers results. Approved by leading networks like PartnerStack, Impact, and CJ Affiliate.";
      page = "Partner With Us";
      break;

    case "/contact":
      imgSrs = "/image/portfolio-hero-img.jpeg";
      headText = "Let's Discuss Your Next Project";
      subText =
        "Ready to transform your business with cutting-edge SaaS solutions? Contact Sharashell Technology today and discover how we can help you achieve your goals.";
      page = "Contact";
      break;
    default:
      break;
  }

  return (
    <div
      className="w-full bg-cover bg-top md:bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${imgSrs})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-terciary-background/50"></div>

      <div className="relative z-10 h-full flex flex-col">
        <Navbar />
        <div className="text-primary-foreground max-w-11/12 lg:container mx-auto flex-1 flex items-center">
          <div className="justify-center flex flex-col pt-10">
            <div className="lg:w-xl justify-center flex flex-col pb-10 gap-5">
              {"/" !== pathName && (
                <div className="flex items-center gap-3">
                  <p className="flex items-center gap-1">
                    <IoHome className="text-secondary-background" />
                    Home
                  </p>
                  <IoIosArrowForward
                    className="text-secondary-background"
                    fontSize={20}
                  />
                  <p>Page</p>
                  <IoIosArrowForward
                    className="text-secondary-background"
                    fontSize={20}
                  />
                  <p>{page}</p>
                </div>
              )}

              <h1 className="text-3xl leading-12 lg:leading-17 lg:text-5xl">
                {headText}
              </h1>
              <p>{subText}</p>
              {"/" === pathName && (
                <div className="flex flex-col md:flex-row gap-5">
                  <Link href="partner">
                    <Button className="w-full" size={"lg"}>
                      Become a Partner
                    </Button>
                  </Link>

                  <Link href="/solutions">
                    <Button
                      className="w-full"
                      variant={"secondary"}
                      size={"lg"}
                    >
                      View our Solutions
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            {"/" === pathName && (
              <div className="font-bold text-xl">
                <div className="w-full grid md:grid-cols-4">
                  {servicesItems.map((items, index) => {
                    const IconComponent = items.icon;
                    return (
                      <div
                        key={index}
                        className={
                          index === 0
                            ? "bg-secondary-background flex flex-col items-center justify-center p-10 border-b-2 md:border-r-2 border-gray-600/50 rounded-t-lg"
                            : "bg-[#1d2222]/20 flex flex-col items-center justify-center p-10 border-b-2 md:border-r-2 border-gray-600/50 min-h-40 md:min-h-42"
                        }
                      >
                        <IconComponent className="w-10 h-10 mb-2" />
                        <h2>{items.headText}</h2>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
