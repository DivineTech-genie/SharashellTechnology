import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sharashell Technology - About Us",
  description:
    "Headquartered in the United States, Sharashell Technology is a premier SaaS development company specializing in crafting innovative, scalable software solutions that drive digital transformation for businesses worldwide. We combine cutting-edge technology with strategic insights to deliver cloud-native applications that empower organizations to thrive in the digital economy.",
};

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">
          PAGE COMING SOON
        </h1>
        <div className="text-4xl md:text-6xl font-bold text-blue-600">
          10 DAYS 12 HRS 45 MINS
        </div>
      </div>
    </div>
  );
};

export default About;
