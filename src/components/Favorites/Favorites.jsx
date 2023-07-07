import { connect } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions/actions";
import { useState } from "react";
import {
  container,
  containerSelectors,
  containerCards,
} from "./Favorites.module.css";

function Favorites({ myFavorites, orderCards, filterCards }) {
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    orderCards(event.target.value);
    setAux(true);
  };

  const handleFilter = (event) => {
    filterCards(event.target.value);
  };

  return (
    <div className={container}>
      <h1>Mis Favoritos</h1>
      <div className={containerSelectors}>
        <select onChange={handleOrder}>
          <option>Order:</option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option>Gender:</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <button>All</button>
      </div>

      <div className={containerCards}>
        {myFavorites.map((favorite) => {
          return (
            <Card
              key={favorite.id}
              id={favorite.id}
              name={favorite.name}
              gender={favorite.gender}
              image={favorite.image}
            />
          );
        })}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { myFavorites: state.myFavorites };
}

function mapDispatchToProps(dispatch) {
  return {
    orderCards: (order) => dispatch(orderCards(order)),
    filterCards: (gender) => dispatch(filterCards(gender)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
