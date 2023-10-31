export const ADD_TASK = 'ADD_TASK';


export const addTask = (carts) => {
  return {
    type: ADD_TASK,
    payload: carts,
  };
};
