import * as types from "./types";

export const removeOrder = (order) => {
    return {
      type: types.REMOVE_ORDER,
      payload: order,
    };
  };