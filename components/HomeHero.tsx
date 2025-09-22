import { Button } from "./ui/button";
import Navbar from "./navbar";
import { servicesItems } from "@/lib/types";
import Link from "next/link";

const HomeHero = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-top md:bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/image/home-hero-img.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-900/20"></div>

      <div className="relative z-10 h-full flex flex-col">
        <Navbar />
        <div className="text-primary-foreground max-w-11/12 lg:container mx-auto flex-1 flex items-center">
          <div className="justify-center flex flex-col pt-10">
            <div className="lg:w-xl justify-center flex flex-col pb-10 gap-5">
              <h1 className="text-3xl lg:leading-17 lg:text-5xl">
                Powering Your Business with SaaS Solutions & Affiliate Marketing
              </h1>
              <p>
                Sharashell Technology delivers cutting-edge SaaS development,
                affiliate marketing solutions, and automation tools that drive
                growth for businesses and create profitable partnerships.
              </p>

              <div className="flex flex-col md:flex-row gap-5">
                <Link href="partner">
                  <Button className="w-full" size={"lg"}>
                    Become a Partner
                  </Button>
                </Link>

                <Link href="/solutions">
                  <Button className="w-full" variant={"secondary"} size={"lg"}>
                    View our Solutions
                  </Button>
                </Link>
              </div>
            </div>
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
                      <h2 className="">{items.headText}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
