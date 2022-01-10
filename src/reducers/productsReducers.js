import { types } from "../types/types";

// product type:
// {
//   name: "",
//   description: "",
//   price: "",
//   user: {
//     _id: "",
//     name: "",
//   },
// },

const initialState = {
  products: [],
  activeProduct: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productSetActive:
      return {
        ...state,
        activeProduct: action.payload,
      };

    case types.producAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case types.productLoaded:
      return {
        ...state,
        products: [...action.payload],
      };
    case types.productUpdated:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    default:
      return state;
  }
};
