import Image from "next/image";
import { Button } from "./ui/button";
import { FaCheckCircle } from "react-icons/fa";

const SubService = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:relative gap-10 max-w-11/12 lg:container mx-auto mt-10">
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quaerat
            quisquam praesentium! Possimus aperiam sapiente maxime unde sequi?
          </p>
          <Button size={"sm"} className="bg-terciary-background mt-4">
            Read More
          </Button>
        </div>
        <div>
          <p className="flex items-center gap-2">
            {" "}
            <FaCheckCircle fontSize={18} /> Private and public cloud
          </p>
          <p className="flex items-center gap-2">
            {" "}
            <FaCheckCircle fontSize={18} /> Cloud infrastructure
          </p>
          <p className="flex items-center gap-2">
            {" "}
            <FaCheckCircle fontSize={18} /> Cloud security and cyber
          </p>
          <p className="flex items-center gap-2">
            {" "}
            <FaCheckCircle fontSize={18} /> Exclucive Service
          </p>
        </div>
        <div className="lg:absolute -top-24 right-0 md:col-span-2">
          <Image
            src="/image/hacker-with-phone.avif"
            alt="A reseacher or Hacker with phone"
            width={500}
            height={500}
            className="w-full object-fit rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SubService;
