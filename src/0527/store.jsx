// src/0527/store.js
import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cartList: []
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartList.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartList: state.cartList.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...state,
          cartList: [...state.cartList, action.payload]
        };
      }
    }
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cartList: state.cartList.filter(item => item.id !== action.payload.id)
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartList: state.cartList.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartList: state.cartList
          .map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0)
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const value = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
