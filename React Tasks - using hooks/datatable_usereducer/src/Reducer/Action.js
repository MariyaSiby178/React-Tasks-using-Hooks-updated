import * as Types from "../Reducer/Type";

export const postSuccess = (data) => {
  console.log(data);
  return {
    type: Types.POST_REQ_SUCCESS,
    payload: data,
  };
};
export const postError = (data) => {
  return {
    type: Types.POST_REQ_FAILURE,
    payload: data,
  };
};
export const getSuccess = (data) => {
  console.log(data);
  return {
    type: Types.GET_REQ_SUCCESS,
    payload: data,
  };
};
export const getError = (data) => {
  console.log(data);
  return {
    type: Types.GET_REQ_FAILURE,
    payload: data,
  };
};
export const getIdSuccess = (data) => {
  console.log(data);
  return {
    type: Types.GET_ID_REQ_SUCCESS,
    payload: data,
  };
};
export const getIdError = (data) => {
  console.log(data);
  return {
    type: Types.GET_ID_REQ_FAILURE,
    payload: data,
  };
};
export const putSuccess = (data) => {
  console.log(data);
  return {
    type: Types.PUT_REQ_SUCCESS,
    payload: data,
  };
};
export const putError = (data) => {
  console.log(data);
  return {
    type: Types.PUT_REQ_FAILURE,
    payload: data,
  };
};
export const deleteSuccess = (data) => {
  console.log(data);
  return {
    type: Types.DELETE_REQ_SUCCESS,
    payload: data,
  };
};
export const deleteError = (data) => {
  return {
    type: Types.DELETE_REQ_FAILURE,
    payload: data,
  };
};

// const actionTypes = {
//   SET_FIELD: "SET_FIELD",
//   SET_ERRORS: "SET_ERRORS",
//   SET_ID: "SET_ID",
//   SET_IS_EDITING: "SET_IS_EDITING",
//   SET_LOADING: "SET_LOADING",
//   SET_API_DATA: "SET_API_DATA",
//   SET_SEARCH_TEXT: "SET_SEARCH_TEXT",
//   SET_SELECTED_PRODUCTS: "SET_SELECTED_PRODUCTS",
//   SET_DELETE_DIALOG_VISIBLE: "SET_DELETE_DIALOG_VISIBLE",
//   SET_DELETE_TARGET: "SET_DELETE_TARGET",
//   SET_DELETE_SELECTED_DIALOG_VISIBLE: "SET_DELETE_SELECTED_DIALOG_VISIBLE",
// };

// export default actionTypes;
