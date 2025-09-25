import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
import { GiGlobe } from "react-icons/gi";
import { LuHandshake, LuSend } from "react-icons/lu";
import { TiArrowSyncOutline } from "react-icons/ti";
import { Button } from "./ui/button";

const ClientsTestemony = () => {
  return (
    <section className="mt-10 md:mt-24 mb-24 bg-terciary-background relative">
      <div className="max-w-11/12 lg:container mx-auto grid md:grid-cols-2 gap-4 pt-10 lg:h-screen">
        <div className="text-white">
          <p className="text-secondary-background">Satisfied User over Globe</p>
          <h2 className="text-2xl font-semibold">
            What Our Clients Say and Get in Touch Now!
          </h2>

          {/* The Clients Review Name and Image */}
          <div>
            <p className="pt-9">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur praesentium, qui aperiam aut doloribus repellendus
              repellat provident delectus labore nesciunt! Cum magnam, nesciunt
              numquam saepe est ratione accusamus veritatis fuga!
            </p>
            <div className="flex items-center gap-4 py-4">
              <div>
                <Image
                  src="/image/client-1.jpeg"
                  alt="A lady on orange dress smiling"
                  width={200}
                  height={200}
                  className="object-fit h-20 w-20 border-8 border-bg-secondary-background rounded-full"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold">Sarah J</h3>
                <p className="text-gray-300">Infracstructure Solution Inc.</p>
              </div>
            </div>
          </div>

          {/* Other Clients */}
          <div>
            <h3 className="text-xl font-semibold">Our Clients</h3>

            <div className="flex items-center py-6 gap-4">
              <LuHandshake fontSize={34} className="" />
              <GiGlobe fontSize={34} />
              <TiArrowSyncOutline fontSize={34} />
              <FaRegStar fontSize={34} />
            </div>
          </div>
        </div>

        {/* Second col */}
        <div className="bg-background p-6 lg:p-10 md:absolute -bottom-10 right-4 lg:right-10 shadow rounded-lg md:max-w-[45.8%] mb-10 md:mb-0">
          <h2 className="text-2xl font-semibold">Send Us a Message</h2>
          <p className="text-gray-500">
            Fill out the form below and we&apos;ll get back to you within 24
            hours.
          </p>

          <div>
            <form className="grid md:grid-cols-2 gap-2 md:gap-4 py-4">
              <p className="grid gap-2">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="shadow rounded-lg py-2 pl-4"
                />
              </p>

              <p className="grid gap-2">
                <label htmlFor="email">Email Adress *</label>
                <input
                  type="text"
                  placeholder="John@company.com"
                  className="shadow rounded-lg py-2 pl-4"
                />
              </p>

              <p className="grid gap-2">
                <label htmlFor="company">Company Name *</label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="shadow rounded-lg py-2 pl-4"
                />
              </p>

              <p className="grid gap-2">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="shadow rounded-lg py-2 pl-4"
                />
              </p>
            </form>
            <div className="grid gap-6">
              <p className="grid gap-2">
                <label htmlFor="inquiry">Inquiry Type *</label>
                <select>
                  <option value="saas_development">SaaS Development</option>
                  <option value="">Affiliate Marketing</option>
                  <option value="">Buisness Automation</option>
                  <option value="">Partnership Opportunity</option>
                  <option value="">Technical Support</option>
                  <option value="">Other</option>
                </select>
              </p>

              <p className="grid gap-2">
                <label htmlFor="message">Message Us *</label>
                <textarea
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                  className="w-full min-h-5 md:min-h-10 lg:min-h-40 shadow rounded-lg py-2 pl-4"
                />
              </p>
            </div>
            <Button
              type="submit"
              className="mt-6 w-full flex items-center gap-2"
              size={"sm"}
            >
              Send Message <LuSend />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsTestemony;
