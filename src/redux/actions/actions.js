import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./type";

export const addFav = (pj) => {
  return { type: ADD_FAV, payload: pj };
};
export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
