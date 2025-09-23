import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

interface ITProps {
  imgSrc: string;
  alt: string;
}

const ItSolution = ({ imgSrc, alt }: ITProps) => {
  return (
    <section className="lg:mt-24 mt-10 flex flex-col lg:flex-row gap-4 lg:gap-20 max-w-11/12 lg:container mx-auto">
      <div className="flex-1">
        <Image
          src={imgSrc}
          alt={alt}
          width={1000}
          height={1000}
          className="w-full h-full min-h-[400px] bg-right object-cover rounded-xl"
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

        <div className="border-l-2 border-secondary-background/20 px-4 md:px-5">
          <p className=" text-gray-400 pb-4">
            Sharashell Technology was founded with a clear vision: to bridge the
            gap between cutting-edge technology and practical business
            solutions. As a U.S.-registered company based in Wyoming, we
            understand the importance of trust, compliance, and reliability in
            today&apos;s digital landscape.
          </p>
          <p className=" text-gray-400">
            Our journey began with a simple observation - businesses needed more
            than just software; they needed strategic partners who could
            understand their unique challenges and deliver solutions that drive
            real growth. Today, we serve clients across multiple industries,
            helping them leverage technology to achieve their business
            objectives.
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
