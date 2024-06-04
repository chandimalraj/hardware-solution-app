import * as types from '../../actions/types';

import {initialState} from '../initialState';

export default function orderReducer(state = initialState.order, action) {
  switch (action.type) {
    case types.ADD_ITEM:
      if (state.items.length > 0) {
        let x = 0;
        const modified = state.items.map(item => {
          if (item.id == action.payload.id) {
            x = 1;
            return {
              ...item,
              quantity:
                parseInt(item.quantity) + parseInt(action.payload.quantity),
              totalPrice: (
                parseFloat(item.totalPrice) +
                parseFloat(action.payload.totalPrice)
              ).toFixed(2),
            };
          }
          return item;
        });
        if (x == 1) {
          console.log({
            ...state,
            items: modified,
          });

          return {
            ...state,
            items: modified,
          };
        } else {
          console.log({
            ...state,
            items: [...state.items, action.payload],
          });

          return {
            ...state,
            items: [...state.items, action.payload],
          };
        }
      } else {
        console.log({
          ...state,
          items: [...state.items, action.payload],
        });

        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    case types.REMOVE_ITEM:
      const filteredItems = state.items.filter(
        item => item.id !== action.payload.id,
      );
      console.log({
        ...state,
        items: filteredItems,
      });

      return {
        ...state,
        items: filteredItems,
      };
      case types.ADD_CUSTOMER:
        console.log({
          ...state,
          customer:action.payload,
        });

        return {
          ...state,
          customer:action.payload,
        };
        case types.REMOVE_ORDER:
        console.log({
          ...state,
          customer:action.payload,
        });

        return {
          ...state,
          customer:null,
          items:[]
        };
    default:
      return state;
  }
}
