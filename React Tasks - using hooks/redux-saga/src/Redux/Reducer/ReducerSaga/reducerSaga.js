import * as types from "../../Type/type";

const initialState = {
  details: [],
  editObj: null,
  obj: null,
};

const reducerSaga = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.GET_REQUEST:
      return {
        ...state,
        obj: null,
      };
    case types.GET_SUCCESS:
      console.log(action);
      return {
        ...state,
        details: action.payload,
        obj: null,
      };
    case types.GET_FAILURE:
      return {
        ...state,
      };
    case types.POST_REQUSET:
      return {
        ...state,
      };
    case types.POST_SUCCESS:
      return {
        ...state,
        details: [...state.details, action.payload],
        obj: action.payload,
      };
    case types.POST_FAILURE:
      return {
        ...state,
      };
    case types.DELETE_REQUEST:
      return {
        ...state,
        obj: null,
      };
    case types.DELETE_SUCCESS:
      return {
        ...state,
        details: state.details.filter((item) => item.id !== action.payload.id),
        obj: null,
      };
    case types.DELETE_FAILURE:
      return {
        ...state,
      };
    case types.GET_ID_REQUEST:
      return {
        ...state,
      };
    case types.GET_ID_SUCCESS:
      return {
        ...state,
        editObj: action.payload,
      };
    case types.GET_ID_FAILURE:
      return {
        ...state,
      };
    case types.UPDATE_REQUEST:
      return {
        ...state,
      };
    case types.UPDATE_SUCCESS:
      return {
        ...state,
        details: state.details.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case types.UPDATE_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducerSaga;
