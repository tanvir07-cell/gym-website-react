import { Close } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex flex-col items-center justify-center md:hidden fixed inset-0  gap-8 bg-black/40 backdrop-blur-lg  "
          : "hidden"
      }
    >
      <Close
        onClick={showMenu}
        className="cursor-pointer absolute right-6 top-6 scale-150"
      ></Close>

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
  );
};

export default MenuItems;
