import React from "react";
import { Increment, Decrement } from "../Redux/Action/action";
import { useDispatch, useSelector } from "react-redux";
import calciReducer from "../Redux/Reducer/CalculationReducer/calciReducer";

export const ReduxForm = () => {
  const user = useSelector((state) => state.calciReducer);
  console.log(user);
  const dispatch = useDispatch();
  const IncrementCount = () => {
    dispatch(Increment());
    // dispatch({ type: "INCREMENT" });
    
  };
  const DecrementCount = () => {
    dispatch(Decrement());
  };
  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <button className="me-2" onClick={IncrementCount}>
          +
        </button>
        <span>{user.count}</span>
        <button className="ms-2" onClick={DecrementCount}>
          -
        </button>
      </div>
    </div>
  );
};
