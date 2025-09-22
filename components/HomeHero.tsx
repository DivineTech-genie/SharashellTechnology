import { Button } from "./ui/button";
import Navbar from "./navbar";
import { servicesItems } from "@/lib/types";

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
        <div className="text-primary-foreground max-w-5/6 lg:container mx-auto flex-1 flex items-center">
          <div className="justify-center flex flex-col pt-10">
            <div className="lg:w-xl justify-center flex flex-col pb-10 gap-5">
              <h1 className="text-3xl lg:leading-17 lg:text-5xl font-bold">
                Powering Your Business with SaaS Solutions & Affiliate Marketing
              </h1>
              <p className="font-semibold">
                Sharashell Technology delivers cutting-edge SaaS development,
                affiliate marketing solutions, and automation tools that drive
                growth for businesses and create profitable partnerships.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                <Button className="" size={"lg"}>
                  Become a Partner
                </Button>
                <Button className="" variant={"secondary"} size={"lg"}>
                  View our Solutions
                </Button>
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
                      <IconComponent className="w-8 h-8 mb-2" />
                      <h2 className="">{items.text}</h2>
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
