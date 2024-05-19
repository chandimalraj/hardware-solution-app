import * as types from "./types";

export const addItem = (item) => {
  return {
    type: types.ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: types.REMOVE_ITEM,
    payload: item,
  };
};