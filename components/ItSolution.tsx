import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

interface ITProps {
  imgSrc: string;
  alt: string;
}

const ItSolution = ({ imgSrc, alt }: ITProps) => {
  return (
    <section className="lg:mt-24 mt-10 flex flex-col lg:flex-row gap-6 lg:gap-20 max-w-11/12 md:container mx-auto">
      <div className="w-full">
        <Image
          src={imgSrc}
          alt={alt}
          width={1000}
          height={1000}
          className="w-full h-96 md:h-full rounded-xl"
        />
      </div>

      <div>
        <div>
          <p className="text-secondary-background mt-5 md:mt-0 font-semibold">
            Delivering Tailored IT Solutions
          </p>
          <h1 className="text-3xl leading-12 md:text-4xl">
            Your Trusted Partner in Building Smart, Secure, and Scalable IT
            Infrastructure For Modern Business!
          </h1>
        </div>

        <div className="border-l-2 border-secondary-background/30 px-4 md:px-10 mt-5">
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
            <p className="flex items-center gap-4">
              <FaCheckCircle /> We Provide Innovative Solutions
            </p>
            <p className="flex items-center gap-4">
              <FaCheckCircle /> Providing Personalized IT Services
            </p>
            <p className="flex items-center gap-4">
              <FaCheckCircle /> Offering secure IT infrastructure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItSolution;
