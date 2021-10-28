import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavStyles";

function Navbar({logout}) {
  return (
    <>
      <Nav>
        <NavLink to="/home">
          <img src="logo.svg" alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/progress">Progress</NavLink>
          <NavLink to="/hikemap">HikeMap</NavLink>
          <NavLink to="/calorie-tracker">Calorie Tracker</NavLink>
        </NavMenu>
        <button className="logout" onClick={logout}>
          Logout
        </button>
      </Nav>
    </>
  );
};

export default Navbar;
