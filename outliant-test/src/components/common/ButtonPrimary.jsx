const ButtonPrimary = ({ label }) => {
  return (
    <div className="text-center  py-2 w-[8rem] text-sm bg-black hover:bg-slate-800 active:bg-slate-700 text-gray-200 rounded my-4">
      <button>{label}</button>
    </div>
  );
};

export default ButtonPrimary;
