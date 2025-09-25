import BussinesSuccess from "@/components/BussinesSuccess";
import ClientsTestemony from "@/components/ClientsTestemony";
import ItSolution from "@/components/ItSolution";
import Services from "@/components/services";
import SubService from "@/components/SubService";
import WhyPartner from "@/components/WhyPartner";

export default function Home() {
  return (
    <div>
      <ItSolution
        imgSrc={"/image/about-hero-img.jpg"}
        alt={"A woman standing and staring at her screen"}
      />
      <Services />
      <SubService />
      <BussinesSuccess />
      <ClientsTestemony />
      <WhyPartner />
    </div>
  );
}
