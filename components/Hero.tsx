import { Button } from "./ui/button";

interface HeroContent {
  headText: string;
  imgSrs: string;
  paragraphText?: string;
  btnText1?: string;
  btnText2?: string;
}

const Hero = ({
  headText,
  imgSrs,
  paragraphText,
  btnText1,
  btnText2,
}: HeroContent) => {
  return (
    <div
      className="w-full h-screen bg-cover bg-top md:bg-center"
      style={{ backgroundImage: `url(/${imgSrs})` }}
    >
      <h1>{headText}</h1>
      <p>{paragraphText}</p>

      <div className="flex gap-2">
        <Button>{btnText1}</Button>
        <Button>{btnText2}</Button>
      </div>
    </div>
  );
};

export default Hero;
