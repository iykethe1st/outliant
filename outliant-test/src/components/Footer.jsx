import ButtonPrimary from "./common/ButtonPrimary";
const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="relative h-[25rem] mt-[12rem] bg-[#ECECEC] flex flex-col md:flex-row items-center md:items-end px-4 md:px-[4rem] lg:px-[10rem] gap-8">
        <div className="h-[30rem] z-10 w-[20rem] md:w-4/5 bg-[#C4C4C4] grid-row-1"></div>
        <div className="w-[20rem] flex flex-col gap-4 px-4 md:w-full grid-row-2 py-8">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            expedita dignissimos
          </span>
          <ButtonPrimary label="Call to Action" />
        </div>
      </div>
      <div className="bg-[#ECECEC] h-[4rem]"></div>
    </div>
  );
};

export default Footer;
