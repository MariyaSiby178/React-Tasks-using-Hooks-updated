import * as types from "../Type/typeSaga";

export const getDataRequest = () => {
  return {
    type: types.GET_REQUEST,
  };
};

export const getDataSuccess = (data) => {
  console.log(data);
  return {
    type: types.GET_SUCCESS,
    payload: data,
  };
};

export const getDataFailure = (data) => {
  console.log(data);
  return {
    type: types.GET_FAILURE,
    payload: data,
  };
};

export const postDataRequest = (data) => {
  return {
    type: types.POST_REQUSET,
    payload: data,
  };
};

export const postDataSuccess = (data) => {
  console.log(data);
  return {
    type: types.POST_SUCCESS,
    payload: data,
  };
};

export const postDataFailure = (data) => {
  console.log(data);
  return {
    type: types.POST_FAILURE,
    payload: data,
  };
};

export const deleteDataRequest = (id) => {
  console.log(id);
  return {
    type: types.DELETE_REQUEST,
    payload: id,
  };
};

export const deleteDataSuccess = (id, data) => {
  console.log(data);
  return {
    type: types.DELETE_SUCCESS,
    id: id,
    payload: data,
  };
};

export const deleteDataFailure = (data) => {
  console.log(data);
  return {
    type: types.DELETE_FAILURE,
    payload: data,
  };
};

export const getIdRequest = (id) => {
  console.log(id);
  return {
    type: types.GET_ID_REQUEST,
    payload: id,
  };
};

export const getIdSuccess = (data) => {
  console.log(data);
  return {
    type: types.GET_ID_SUCCESS,
    payload: data,
  };
};

export const getIdFailure = (data) => {
  console.log(data);
  return {
    type: types.GET_ID_FAILURE,
    payload: data,
  };
};

export const updateDataRequest = (data) => {
  console.log(data);
  return {
    type: types.UPDATE_REQUEST,
    payload: data,
  };
};

export const updateDataSuccess = (data) => {
  console.log(data);
  return {
    type: types.UPDATE_SUCCESS,
    payload: data,
  };
};

export const updateDataFailure = (data) => {
  return {
    type: types.UPDATE_FAILURE,
    payload: data,
  };
};
