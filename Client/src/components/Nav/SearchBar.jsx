import React, { useState } from "react";
import { styleSearchBar } from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={styleSearchBar}>
      <input
        type="text"
        placeholder="Busca un personaje"
        onChange={handleChange}
        value={id}
      />
      <button
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
