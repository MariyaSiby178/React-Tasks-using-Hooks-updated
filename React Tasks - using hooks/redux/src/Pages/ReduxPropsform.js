import React from "react";
import { Increment, Decrement } from "../Redux/Action/action";
import { connect } from "react-redux";
import calciReducer from "../Redux/Reducer/CalculationReducer/calciReducer";

const ReduxPropsform = (props) => {
  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <button className="me-2" onClick={props.Increment}>
          +
        </button>
        <span>{props.count}</span>
        <button className="ms-2" onClick={props.Decrement}>
          -
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.calciReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Increment: () => dispatch(Increment()),
    Decrement: () => dispatch(Decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPropsform);
