import React from "react";
import { Link } from "react-router-dom";
import { cardClass } from "./Card.module.css";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className={cardClass}>
      <button onClick={() => onClose(id)}>X</button>
      <h2>{name}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{status}</h2>
      <h2>{origin}</h2>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} className="imagen" />
      </Link>
    </div>
  );
}
