import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../actions/type";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    /*     case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      }; */

    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    /*case REMOVE_FAV:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (favorite) => favorite.id !== Number(payload)
        ),
        myFavorites: state.allCharacters.filter(
          (favorite) => favorite.id !== Number(payload)
        ),
      };*/

    case REMOVE_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case FILTER:
      const filtrados = state.allCharacters.filter(
        (pj) => pj.gender === payload
      );
      return {
        ...state,
        myFavorites: filtrados,
      };

    case ORDER:
      const copy = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? copy.sort((a, b) => a.id - b.id)
            : copy.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
