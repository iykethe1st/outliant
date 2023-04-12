import ButtonPrimary from "./common/ButtonPrimary";
import ButtonSecondary from "./common/ButtonSecondary";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 text-black gap-12  md:grid-cols-2 justify-items-center md:justify-items-start  lg:py-[5rem] items-center px-4 md:px-[4rem] lg:px-[10rem]">
      <div className="flex flex-col gap-4 w-[20rem] md:w-full lg:pr-8">
        <h1 className="font-bold text-4xl lg:text-6xl">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <span className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          iure culpa eligendi magnam ab lectus
        </span>
        <div className="flex items-center gap-8">
          <ButtonPrimary label="Call to Action" />
          <ButtonSecondary label="See Workspace" />
        </div>
      </div>
      <div className="relative w-[20rem] md:w-full px-8">
        <div className="bg-[#C4C4C4] h-[15rem] w-[15rem] lg:h-[22rem] lg:w-[22rem]"></div>
        <div className="bg-[#9D9D9D] h-[8rem] w-[8rem] absolute -top-8 right-8 lg:-top-10 lg:right-10 lg:h-[12rem] lg:w-[12rem]"></div>
      </div>
    </div>
  );
};

export default Hero;
