import { connect } from "react-redux";
import Card from "../Card/Card";

function Favorites({ myFavorites }) {
  return (
    <div>
      <h1>Mis Favoritos</h1>
      {console.log(myFavorites)}
      {myFavorites.map((favorite) => {
        return (
          <Card
            key={favorite.id}
            id={favorite.id}
            name={favorite.name}
            image={favorite.image}
          />
        );
      })}
    </div>
  );
}

export default connect(mapStateToProps, null)(Favorites);

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}
