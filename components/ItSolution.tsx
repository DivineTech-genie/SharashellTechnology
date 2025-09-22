import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

interface ITProps {
  imgSrc: string;
  alt: string;
}

const ItSolution = ({ imgSrc, alt }: ITProps) => {
  return (
    <section className="lg:mt-24 mt-10 flex flex-col md:flex-row  gap-4 lg:gap-20 max-w-11/12 lg:container mx-auto">
      <div className="flex-1">
        <Image
          src={imgSrc}
          alt={alt}
          width={1000}
          height={1000}
          className="w-full max-h-full min-h-[400px] object-cover rounded-xl"
        />
      </div>

      <div className="flex-1">
        <div>
          <p className="text-secondary-background font-semibold">
            Delivering Tailored IT Solutions
          </p>
          <h1 className="headText">
            Your Trusted Partner in Building Smart, Secure, and Scalable IT
            Infrastructure For Modern Business!
          </h1>
        </div>

        <div className="border-l-2 border-secondary-background/30 px-4 md:px-5">
          <p className=" text-gray-400 pb-4">
            Our company excels in delivering high-quality, innovative IT
            solutions through advanced technology and meticulous attention to
            detail.
          </p>
          <p className=" text-gray-400">
            We specialize in offering customized, scalable digital solutions
            designed to meet the specific needs of each client, fostering a
            collaborative approach to achieve tailored outcomes.
          </p>

          <div className="flex flex-col gap-5 pt-5">
            <p className="flex items-center text-white py-4 px-4 rounded-xl gap-2 bg-terciary-background">
              <FaCheckCircle fontSize={18} /> We Provide Innovative Solutions
            </p>
            <p className="flex items-center py-4 px-4 bg-blue-50 rounded-xl gap-2">
              <FaCheckCircle fontSize={18} /> Providing Personalized IT Services
            </p>
            <p className="flex items-center py-4 px-4 bg-blue-50 rounded-xl gap-2">
              <FaCheckCircle fontSize={18} /> Offering secure IT infrastructure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItSolution;
