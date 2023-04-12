const ButtonSecondary = ({ label, onClick }) => {
  return (
    <div className="text-center  py-2 w-[8rem] text-sm ring-1 ring-black bg-white hover:bg-gray-200 active:bg-gray-300 text-black rounded my-4">
      <button onClick={onClick}>{label}</button>
    </div>
  );
};

export default ButtonSecondary;
