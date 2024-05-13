import * as Type from "../../Type/type";

const initialState = {
  count: 0,
};

const calciReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.INCREMENT:
      return { ...state, count: state.count + 1 };

    case Type.DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

export default calciReducer;
