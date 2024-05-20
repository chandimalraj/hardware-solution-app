import * as types from "./types";

export const addCustomer = (customer) => {
  return {
    type: types.ADD_CUSTOMER,
    payload: customer,
  };
};

