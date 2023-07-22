import React from "react";
import Cards from "../../components/Cards/Cards";

export default function Home(props) {
  return (
    <div>
      <h1>Bienvenidos a Rick&Morty App</h1>
      <Cards characters={props.characters} onClose={props.onClose} />
    </div>
  );
}
