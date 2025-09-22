import Link from "next/link";
import { Button } from "./ui/button";
import { servicesItems } from "@/lib/types";
import { FaCheckCircle } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      {/* First Row */}
      <div>
        <div>
          <p>Delivering Tailored IT Solutions</p>
          <h1>
            Empowering Your Business with Reliable, Secure, and Scalable IT
            Solutions!
          </h1>
        </div>
        <div>
          <p>
            Today, our company is a leading provider of innovative IT solutions,
            serving key markets across North America and Europe
          </p>
          <Link href="/service">
            <Button>Explore Our Service</Button>
          </Link>
        </div>
        <div>
          <p>
            Our sales offices and extensive industry experience enable us to
            provide comprehensive IT solutions and supply chain expertise,
            ensuring seamless service delivery and optimized technology
            integration at every stage.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div>
        {servicesItems.map((items, i) => {
          const IconComponent = items.icon;
          return (
            <div key={i}>
              <h1>{items.headText}</h1>
              <div>
                <IconComponent className="w-10 h-10 text-primary-foreground" />
              </div>

              <div>
                <p>{items.subText}</p>

                <ul>
                  {items.list?.map((list) => (
                    <li key={list}>
                      <FaCheckCircle /> {list}
                    </li>
                  ))}
                </ul>

                <Button>Read More</Button>
              </div>
            </div>
          );
        })}
      </div>

      <p>
        Innovative, secure, and budget-friendly tech systems,
        <Link href="/solutions"> Find Your Solution Now!</Link>
      </p>
    </div>
  );
};

export default Services;
