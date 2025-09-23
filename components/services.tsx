import Link from "next/link";
import { Button } from "./ui/button";
import { coreValues, servicesItems } from "@/lib/types";
import { FaCheckCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

const Services = () => {
  return (
    <main>
      <section
        className="relative lg:mt-24 mt-10 "
        style={{
          backgroundImage: "url('/image/background-img.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#f4f6f8]/90"></div>

        <div className="relative z-10 max-w-11/12 pt-10 lg:pt-12 lg:container mx-auto">
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
                solutions, serving key markets across Europe and Africa
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
                <div
                  key={i}
                  className="shadow bg-background rounded-lg relative"
                >
                  <div className="bg-terciary-background absolute rounded-tr-lg p-4 top-0 right-0">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="p-6 text-2xl w-70 md:w-full font-bold">
                    {items.headText}
                  </h2>

                  <div className="pb-6 mx-6">
                    <div className="pl-6 border-secondary-background/20 border-l-2">
                      <p className=" text-gray-400 pb-4">{items.subText}</p>

                      <p className=" text-gray-400 pb-4">{items.subText2}</p>

                      <ul className="flex flex-col gap-3">
                        {items.list?.map((list) => (
                          <li className="flex gap-3 items-center" key={list}>
                            <FaCheckCircle /> {list}
                          </li>
                        ))}
                      </ul>
                      <Button
                        size={"sm"}
                        className="mt-3 bg-terciary-background"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-sm py-10 text-center">
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

      {/* Second Section of the Services */}

      <section
        className="relative bg-right"
        style={{
          backgroundImage: "url('/image/background-img-2.png')",
        }}
      >
        <div className="absolute inset-0 bg-foreground/90"></div>

        <div className="relative z-10 text-white lg:pt-24 pt-10 max-w-11/12 lg:container mx-auto">
          <div className="flex flex-col justify-center items-center gap-2 text-center">
            <p className="text-secondary-background font-semibold">
              Delivering Tailored IT Solutions
            </p>
            <h1 className="headText semibold lg:w-md">
              Innovative IT Solutions Tailored for Your Business
            </h1>
            <Button size={"sm"}>Explore Our Service</Button>
          </div>

          <div className="">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-14 justify-center gap-5">
              {coreValues.map((items) => {
                const IconComponent = items.icon;
                return (
                  <div
                    key={items.headText}
                    className="flex flex-col items-center justify-center border-2 border-gray-500 gap-4 p-4 rounded-lg h-96 text-center"
                  >
                    <IconComponent className="w-12 h-12 pb-5" />
                    <div>
                      <h2 className="text-2xl font-semibold">
                        {items.headText}
                      </h2>
                      <p>{items.subText}</p>
                    </div>

                    <IoIosArrowRoundForward className="bg-secondary-background w-6 h-6 rounded-full text-white" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4 items-center py-8">
            <div className="flex gap-2 text-secondary-background">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="text-sm font-semibold">
              Innovative, secure, and budget-friendly tech systems, <br />
              <Link
                href="/solutions"
                className="text-secondary-background hover:text-white"
              >
                Find Your Solution Now!
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
