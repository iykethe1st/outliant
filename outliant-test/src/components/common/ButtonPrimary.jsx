const ButtonPrimary = ({ label, onClick }) => {
  return (
    <button
      className="text-center min-w-[5rem] px-4 py-2 text-sm bg-black hover:bg-slate-800 active:bg-slate-700 text-gray-200 rounded my-4"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonPrimary;
