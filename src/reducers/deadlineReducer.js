import { types } from "../types/types";

const initialState = {
  deadlines: [],
};

export const deadlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.deadlineAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case types.deadlineLoaded:
      return {
        ...state,
        deadlines: [...action.payload],
      };
    default:
      return state;
  }
};
