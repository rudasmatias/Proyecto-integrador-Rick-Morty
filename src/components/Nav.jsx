import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  );
}
