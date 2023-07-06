import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cardClass } from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions/actions";
import { connect } from "react-redux";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = (state) => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, image });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={cardClass}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button
        onClick={() => {
          onClose(id);
          removeFav(id);
        }}
      >
        X
      </button>
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

//mapea las funciones de las actions con el componente-->solo envía señales para que actúe el reduce
function mapDispatchToProps(dispatch) {
  return {
    addFav: (props) => dispatch(addFav(props)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

//mapea el estado "global" que está en el store con el componente--> solo lee
function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
