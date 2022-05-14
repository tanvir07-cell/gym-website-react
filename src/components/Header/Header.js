import { MenuOutlined } from "@material-ui/icons";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import MenuItems from "../MenuItems/MenuItems";
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState(false);
  // get the current user:
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();
  //   ei from er means holo jodi signUp hoye jay tahole "/"(home page e niye jao)

  const from = location?.state?.from?.pathname || "/";

  //  After google login User redirect to the home page
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="  flex items-center justify-between p-2 fixed w-full text-white uppercase bg-indigo-500 nav-bar">
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
        <div className="absolute right-3 top-3 scale-100 md:hidden">
          <MenuOutlined
            onClick={showMenu}
            className="scale-150 cursor-pointer animate-pulse"
          ></MenuOutlined>
        </div>
        {/* menu icon end: */}

        <ul className="hidden md:flex gap-8 p-8    ">
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <span className={isActive ? "active-link" : undefined}>
                  Home
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/checkout">
              {({ isActive }) => (
                <span className={isActive ? "active-link" : undefined}>
                  CheckOut
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs">
              {({ isActive }) => (
                <span className={isActive ? "active-link" : undefined}>
                  Blogs
                </span>
              )}
            </NavLink>
          </li>
          {user?.uid ? (
            <div className="flex items-center  justify-center">
              <button onClick={() => signOut(auth)}>SignOut</button>
              <p className="mx-2 text-grad">{user?.displayName}</p>
              {/* <img src={googleUser.photoURL} alt="" className="profile-img" /> */}
            </div>
          ) : (
            <li>
              <NavLink to="/login">
                {({ isActive }) => (
                  <span className={isActive ? "active-link" : undefined}>
                    Login
                  </span>
                )}
              </NavLink>
            </li>
          )}
        </ul>
        <MenuItems showMenu={showMenu} active={active}></MenuItems>
      </nav>
    </div>
  );
};

export default Header;
