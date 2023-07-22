import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import { ulStyle, navContainer } from "./Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <div className={navContainer}>
      <ul className={ulStyle}>
        <NavLink to="/home">
          <li> Home </li>
        </NavLink>

        <NavLink to="/about">
          <li> About </li>
        </NavLink>

        <NavLink to="/favorites">
          <li> Favorites </li>
        </NavLink>
      </ul>

      <SearchBar onSearch={onSearch} />
    </div>
  );
}
