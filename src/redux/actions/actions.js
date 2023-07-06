import { ADD_FAV, REMOVE_FAV } from "./type";

export const addFav = (pj) => {
  return { type: ADD_FAV, payload: pj };
};
export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};
