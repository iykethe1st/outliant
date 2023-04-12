import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { BiWalletAlt } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import ButtonPrimary from "./common/ButtonPrimary";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      id: 0,
      item: "Home",
      link: "/",
    },
    {
      id: 1,
      item: "About",
      link: "/about",
    },
    {
      id: 2,
      item: "Services",
      link: "/services",
    },
    {
      id: 3,
      item: "Products",
      link: "/products",
    },
  ];

  return (
    <nav className="text-gray-600 bg-white flex-wrap w-full flex items-center tracking-tight justify-between py-4 transform transition duration-500 ease-in-out px-4 md:px-[4rem] lg:px-[8rem]">
      <a href="/">
        {" "}
        <h1 className=" lg:px-8 font-bold text-xl">Logo</h1>
      </a>

      <TiThMenu
        className={`${
          !open ? "ring-1" : "ring-2"
        } h-8 w-8 ring-gray-300 rounded lg:hidden transform transition duration-500 ease-in-out mr-4 md:mr-8`}
        onClick={() => {
          setOpen(!open);
        }}
      />

      <section
        className={`${
          open ? "block w-full" : "hidden"
        } lg:flex lg:items-center lg:w-2/3 lg:justify-between backdrop-blur-sm px-4 md:px-8 lg:px-20`}
      >
        <div className="lg:flex lg:justify-between">
          <ul className="lg:flex lg:gap-2 items-center text-sm w-full">
            {navItems.map((nav) => (
              <li
                key={nav.id}
                className="p-2 lg: md:px-2 block text-start border-b-[0.5px] lg:border-0 border-neutral-800"
              >
                <a
                  className="hover:text-slate-400 active:text-slate-500"
                  href={nav.link}
                >
                  {nav.item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ButtonPrimary label="Call to Action" />
      </section>
    </nav>
  );
};

export default Navbar;
