import { ADD_TASK} from './taskActions';

const initialState = {
  carts: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
   
    default:
      return state;
  }
};
export default taskReducer;