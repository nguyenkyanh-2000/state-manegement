export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const UPDATE_NAME = "UPDATE_NAME";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const updateName = () => ({
  type: UPDATE_NAME,
});
