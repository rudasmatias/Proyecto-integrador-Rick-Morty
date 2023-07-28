import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./type";

import axios from "axios";

export const addFav = (character) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};

/* export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
}; */

export const removeFav = (id) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;

    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);
      console.log(data);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
