import HomeHero from "@/components/HomeHero";
import ItSolution from "@/components/ItSolution";
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
      <HomeHero />

      <div>
        <ItSolution
          imgSrc={"/image/about-hero-img.jpg"}
          alt={"A woman standing and staring at her screen"}
        />
        {/* <Services /> */}
      </div>
    </div>
  );
}
