const MidSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center md:justify-items-start w-full text-gray-500 px-4 md:px-[4rem] lg:px-[8rem]">
      <div className="w-[20rem] md:w-full md:px-8 self-start">
        <div className="flex flex-col gap-4">
          <h1 className="text-black font-bold">Header Text</h1>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
            soluta eum! Quisquam ut error sint unde ex debitis! Ab impedit nobis
            tempora sed voluptates amet id perspiciatis, eos commodi optio!
          </div>
        </div>
      </div>
      <div className="h-[25rem] w-[20rem] md:w-full bg-[#C4C4C4] md:px-8"></div>
      <div className="w-[20rem] md:w-full md:px-8 self-end">
        <div className="flex flex-col gap-4">
          <h1 className="text-black font-bold">Header Text</h1>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
            soluta eum! Quisquam ut error sint unde ex debitis! Ab impedit nobis
            tempora sed voluptates amet id perspiciatis, eos commodi optio!
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
