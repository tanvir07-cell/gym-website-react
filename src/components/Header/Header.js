import { MenuOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "../MenuItems/MenuItems";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="  flex items-center justify-between p-4 fixed w-full text-white">
      <div>
        <h1
          className="uppercase font-bold text-3xl text-white-800 tracking-widest italic hover:not-italic drop-shadow-lg  text-transparent bg-clip-text bg-gradient-to-br from-gray-100
          to-gray-200"
        >
          Tanvir Rifat
        </h1>
      </div>

      <nav>
        {/* menu icon : */}
        <div className="absolute right-6 top-6 scale-150 md:hidden">
          <MenuOutlined
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          ></MenuOutlined>
        </div>
        {/* menu icon end: */}

        <ul className="hidden md:flex gap-8 p-8 bg-white/40 uppercase ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Link</Link>
          </li>
          <li>
            <Link to="/who">Who</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <MenuItems showMenu={showMenu} active={active}></MenuItems>
      </nav>
    </div>
  );
};

export default Header;
