import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../Type/type";
import {
  getDataRequest,
  getDataSuccess,
  getDataFailure,
  postDataSuccess,
  postDataFailure,
  deleteDataSuccess,
  deleteDataFailure,
  getIdSuccess,
  getIdFailure,
  updateDataSuccess,
  updateDataFailure,
} from "../../Action/action";
import {
  deleteData,
  getData,
  getId,
  postData,
  updateData,
} from "../../../Services/mockApi";

function* getApi() {
  console.log("saga");
  const res = yield call(getData);
  console.log(res);

  if (res.status === 200 || res.status === 201) {
    yield put(getDataSuccess(res.data));
    console.log(res.data);
  } else {
    yield put(getDataFailure("Failed"));
  }
}

function* postApi({ payload }) {
  console.log("saga", payload);
  const res = yield call(postData, payload);
  console.log(res);

  if (res.status === 200 || res.status === 201) {
    yield put(postDataSuccess(res.data));
  } else {
    yield put(postDataFailure("Post failed"));
  }
}

function* deleteApi({ payload }) {
  console.log("sagadelete", payload);
  const res = yield call(deleteData, payload);
  console.log(res);

  if (res.status === 200 || res.status === 201) {
    yield put(deleteDataSuccess(res.data));
    yield put({ types: "DELETE_SUCCESS", payload: payload });
  } else {
    yield put(deleteDataFailure("Delete failed"));
  }
}

function* getIdData({ payload }) {
  console.log("sagadegetid", payload);
  const res = yield call(getId, payload);
  console.log(res);

  if (res.status === 200 || res.status === 201) {
    yield put(getIdSuccess(res.data));
  } else {
    yield put(getIdFailure("GetId Failed"));
  }
}

function* editApi({ payload }) {
  console.log("sagadeedit", payload);
  const res = yield call(updateData, payload);
  console.log(res);

  if (res.status === 200 || res.status === 201) {
    yield put(updateDataSuccess, res.data);
  } else {
    yield put(updateDataFailure("UpdateData Failed"));
  }
}

export function* StudentWatcherSaga() {
  console.log("watcherSaga");
  yield takeLatest(types.GET_REQUEST, getApi);
  yield takeLatest(types.POST_REQUSET, postApi);
  yield takeLatest(types.DELETE_REQUEST, deleteApi);
  yield takeLatest(types.GET_ID_REQUEST, getIdData);
  yield takeLatest(types.UPDATE_REQUEST, editApi);
  // console.log("getApi")
}
