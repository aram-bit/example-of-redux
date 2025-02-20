import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BUY_MILK } from "../redux/milk/milkTypes";

function MilkContainer() {
  const [value, setValue] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>num Of Milks({state.numOfMilks})</h2>
      <input type="number" onChange={(e) => setValue(e.target.value)} value={value} />
      <button
        onClick={() => {
          dispatch({ type: BUY_MILK, payLoad: value });
        }}
      >buy milk</button>
    </div>
  );
}

export default MilkContainer;
