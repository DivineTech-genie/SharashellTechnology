import Link from "next/link";
import { Button } from "./ui/button";
import { BusinessStorie } from "@/lib/types";
import Image from "next/image";

const BussinesSuccess = () => {
  return (
    <section>
      <div className=" max-w-11/12 lg:container mx-auto mt-10 lg:mt-24">
        <div className="grid md:grid-cols-3 gap-5 lg:gap-12 items-center">
          <div>
            <p className="text-secondary-background">
              Delivering Tailored IT Solutions
            </p>
            <h1 className="headText">
              Sucess Stories from Our Innovative Solutions For Your Business
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 lg:mt-24">
          {BusinessStorie.map((items, i) => (
            <div key={i}>
              <div>
                <Image
                  src={items.imgSrc}
                  alt={items.alt}
                  width={500}
                  height={500}
                  className="object-fit w-full rounded-lg"
                />
              </div>

              <div className="grid gap-2 mt-4">
                <p className="text-secondary-background">{items.storyType}</p>
                <h2 className="text-2xl font-semibold">{items.headText}</h2>
                <p>{items.subText}</p>
              </div>
              <Button size={"sm"} className="bg-terciary-background mt-4">
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BussinesSuccess;
