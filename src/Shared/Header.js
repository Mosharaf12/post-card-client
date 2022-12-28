import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.err(err));
  };

  const menubar = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/media">MEDIA</Link>
      </li>
      <li>
        <Link to="/message">MESSAGE</Link>
      </li>
      <li>
        <Link to="/about">ABOUT</Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            <button onClick={handleOut}>LOG OUT</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-pink-100 fixed z-10 glass">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menubar}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          POST-CARD
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menubar}</ul>
      </div>
      <div className="navbar-end">
       {
        user?.uid && 
        <>
         <h2 className="hover:text-blue-500">{user?.displayName}</h2>
        <div className="avatar">
          <div className="w-8 rounded mx-3"> 
         {
          user?.photoURL?
          <img src={user?.photoURL} alt="" />
          :
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' alt="" />
         }
          </div>
        </div>
        </>

       }
      </div>
    </div>
  );
};

export default Header;
