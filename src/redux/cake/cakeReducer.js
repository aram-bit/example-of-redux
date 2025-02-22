import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
};
function cakeReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE: {
      return { ...state, numOfCakes: state.numOfCakes - action.payLoad };
    }
    default:
      return state;
  }
}

export default cakeReducer;
