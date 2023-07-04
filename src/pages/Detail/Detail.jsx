import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      <h2>{character.origin ? character.origin.name : "Desconocido"}</h2>
      <img src={character.image} alt="" />
    </div>
  );
}
