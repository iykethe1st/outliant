const ButtonSecondary = ({ label, onClick }) => {
  return (
    <button
      className="text-center px-4 py-2 min-w-[5rem] text-sm ring-1 ring-black bg-white hover:bg-gray-200 active:bg-gray-300 text-black rounded my-4"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonSecondary;
