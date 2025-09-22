import Link from "next/link";
import { Button } from "./ui/button";
import { servicesItems } from "@/lib/types";
import { FaCheckCircle } from "react-icons/fa";

const Services = () => {
  return (
    <section
      className="relative lg:mt-24 mt-10 "
      style={{
        backgroundImage: "url('/image/background-img.png')",
      }}
    >
      <div className="absolute inset-0 bg-[#f4f6f8]/90"></div>

      <div className="relative z-10 max-w-11/12 pt-20 lg:container mx-auto">
        {/* First Row */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-12 items-center">
          <div>
            <p className="text-secondary-background">
              Delivering Tailored IT Solutions
            </p>
            <h1 className="headText">
              Empowering Your Business with Reliable, Secure, and Scalable IT
              Solutions!
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              Today, our company is a leading provider of innovative IT
              solutions, serving key markets across North America and Europe
            </p>
            <Link href="/service">
              <Button size={"sm"}>Explore Our Service</Button>
            </Link>
          </div>
          <div>
            <p className="text-gray-500">
              Our sales offices and extensive industry experience enable us to
              provide comprehensive IT solutions and supply chain expertise,
              ensuring seamless service delivery and optimized technology
              integration at every stage.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-3 mt-10 gap-3 lg:gap-8">
          {servicesItems.map((items, i) => {
            const IconComponent = items.icon;
            return (
              <div key={i} className="shadow bg-background rounded-lg relative">
                <div className="bg-terciary-background absolute rounded-tr-lg p-4 top-0 right-0">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="p-6 text-2xl font-bold">{items.headText}</h2>

                <div className="pb-6 mx-6">
                  <div className="pl-6 border-secondary-background/20 border-l-2">
                    <p>{items.subText}</p>

                    <ul className="flex flex-col gap-3">
                      {items.list?.map((list) => (
                        <li className="flex gap-3 items-center" key={list}>
                          <FaCheckCircle /> {list}
                        </li>
                      ))}
                    </ul>
                    <Button size={"sm"} className="mt-3 bg-terciary-background">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-sm mt-5 text-center">
          Innovative, secure, and budget-friendly tech systems,
          <Link
            href="/solutions"
            className="text-secondary-background hover:text-terciary-background"
          >
            Find Your Solution Now!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Services;
