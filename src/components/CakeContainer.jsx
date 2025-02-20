import { useDispatch, useSelector } from "react-redux";
import { BUY_CAKE } from "../redux/cake/cakeTypes";

function CakeContainer() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>cake numbers({state.numOfCakes})</h2>
      <button onClick={() => dispatch({ type: BUY_CAKE, payLoad: 1 })}>
        buy one cake
      </button>
      <button onClick={() => dispatch({ type: BUY_CAKE, payLoad: 2 })}>
        buy two cakes
      </button>
    </div>
  );
}

export default CakeContainer;
