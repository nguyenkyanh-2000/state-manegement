import { INCREMENT, DECREMENT, UPDATE_NAME } from "./actions";

const initialState = {
  count: 0,
  name: "John",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case UPDATE_NAME:
      return {
        ...state,
        name: state.name === "John" ? "Jane" : "John",
      };
    default:
      return state;
  }
};

export default counterReducer;
