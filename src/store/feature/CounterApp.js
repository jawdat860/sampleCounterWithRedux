import { useDispatch, useSelector } from "react-redux";
import { add, addNumber, rest, sub } from "./counterSlice";
import { useState } from "react";

const CounterApp = () => {
  const [addV, setAddV] = useState(0);
  const newValue = Number(addV) || 0;
  const state = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const newValueHandler = (e) => {
    setAddV(e.target.value);
  };
  const restHandler = () => {
    dispatch(rest());
    setAddV(0);
  };
  return (
    <section>
      <p>{state}</p>
      <div>
        <button onClick={() => dispatch(add())}>Add</button>
        <button onClick={() => dispatch(sub())}>sub</button>
      </div>
      <input value={newValue} onChange={newValueHandler} />
      <div>
        <button onClick={restHandler}>rest</button>
        <button onClick={() => dispatch(addNumber(newValue))}>Add</button>
      </div>
    </section>
  );
};
export default CounterApp;
