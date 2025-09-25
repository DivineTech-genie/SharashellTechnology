import { LuSend } from "react-icons/lu";
import { Button } from "./ui/button";

const Form = () => {
  return (
    <div>
      {" "}
      <h2 className="text-2xl font-semibold">Send Us a Message</h2>
      <p className="text-gray-500">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
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
            <label htmlFor="message">Message *</label>
            <textarea
              placeholder="Tell us about your project requirements, goals, and timeline..."
              className="w-full min-h-5 md:min-h-4 lg:min-h-10 shadow rounded-lg py-2 pl-4"
            />
          </p>
        </div>
        <Button
          type="submit"
          className="mt-4 w-full flex items-center gap-2"
          size={"sm"}
        >
          Send Message <LuSend />
        </Button>
      </div>
    </div>
  );
};

export default Form;
