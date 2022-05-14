import { Close } from "@material-ui/icons";
import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const MenuItems = ({ showMenu, active }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  return (
    <ul
      className={
        active
          ? "flex flex-col items-center justify-center md:hidden fixed inset-0  gap-8 bg-black/60 backdrop-blur-xl z-auto"
          : "hidden"
      }
    >
      <Close
        onClick={showMenu}
        className="cursor-pointer absolute right-6 top-6 scale-150 animate-bounce"
      ></Close>

      <li>
        <NavLink to="/">
          {({ isActive }) => (
            <span className={isActive ? "active-link" : undefined}>Home</span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/services">
          {({ isActive }) => (
            <span className={isActive ? "active-link" : undefined}>
              Services
            </span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/blogs">
          {({ isActive }) => (
            <span className={isActive ? "active-link" : undefined}>Blogs</span>
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
  );
};

export default MenuItems;
