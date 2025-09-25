import { FaShieldHalved } from "react-icons/fa6";
import { Button } from "./ui/button";
import { SlPeople } from "react-icons/sl";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

const WhyPartner = () => {
  return (
    <main>
      <section>
        <div className="max-w-11/12 lg:container mx-auto flex md:flex-row flex-col gap-4">
          <div className="grid gap-6 flex-1">
            <h1 className="headText font-semibold">
              Why Partner with Sharashell Technology?
            </h1>

            <div>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FiCheckCircle
                  fontSize={24}
                  className="text-secondary-background"
                />{" "}
                U.S.-Based & Compliant
              </h2>
              <p>
                Registered in Wyoming with full legal compliance and
                transparency.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FiCheckCircle
                  fontSize={24}
                  className="text-secondary-background"
                />{" "}
                Proven Track Record
              </h2>
              <p>15+ successful projects with 98% client satisfaction rate.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FiCheckCircle
                  fontSize={24}
                  className="text-secondary-background"
                />
                Cutting-Edge Technology
              </h2>
              <p>
                Latest frameworks, cloud infrastructure, and security best
                practices.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FiCheckCircle
                  fontSize={24}
                  className="text-secondary-background"
                />{" "}
                Dedicated Support
              </h2>
              <p>24/7 technical support and dedicated account management.</p>
            </div>
          </div>

          {/*  */}
          <div className="grid lg:grid-cols-2 items-center text-center gap-4 flex-1">
            <div className="shadow p-6 rounded-lg">
              <div className="flex justify-center items-center py-4">
                <FaShieldHalved fontSize={34} />
              </div>
              <h2 className="text-2xl font-semibold pb-4">Secure & Reliable</h2>
              <p>Enterprise-grade security and 99.9% uptime guarantee.</p>
            </div>
            <div className="shadow p-6 rounded-lg">
              <div className="flex justify-center items-center py-4">
                <SlPeople fontSize={34} />
              </div>
              <h2 className="text-2xl font-semibold pb-4">Expert Team</h2>
              <p>Experienced developers and marketing specialists.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-24 lg:pb-24">
        <div className="max-w-11/12 lg:container mx-auto grid gap-6 justify-center text-center items-center">
          <div>
            <h1 className="headText font-semibold">
              Ready to Partner with Us?
            </h1>
            <p className="md:w-3xl text-center">
              Join leading affiliate networks and businesses who trust
              Sharashell Technology for their SaaS development and marketing
              automation needs.
            </p>

            <div className="grid md:grid-cols-2 mt-4 gap-4">
              <Link href="/partner">
                <Button size={"sm"} className="w-full">
                  Start Partnership
                </Button>
              </Link>

              <Link href="/contact">
                <Button size={"sm"} variant={"secondary"} className="w-full">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyPartner;
