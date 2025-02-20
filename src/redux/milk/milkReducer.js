import { BUY_MILK } from "./milkTypes";

const initialState = {
  numOfMilks: 30,
};
function milkReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_MILK: {
      return {
        ...state,
        numOfMilks: state.numOfMilks - action.payLoad,
      };
    }

    default:
      return state;
  }
}

export default milkReducer;
