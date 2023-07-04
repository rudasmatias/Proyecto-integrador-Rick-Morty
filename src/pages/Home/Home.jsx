import React from "react";
import Cards from "../../components/Cards/Cards";

export default function Home(props) {
  return (
    <div>
      <h1>Estoy en el Home</h1>
      <button
        onClick={() => {
          props.reset();
        }}
      >
        Reset
      </button>
      <Cards characters={props.characters} onClose={props.onClose} />
    </div>
  );
}
