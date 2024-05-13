import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../../Type/typeSaga";
import { useNavigate } from "react-router-dom";
import {
  getDataRequest,
  getDataSuccess,
  getDataFailure,
  postDataSuccess,
  postDataFailure,
  deleteDataSuccess,
  deleteDataFailure,
  updateDataSuccess,
  updateDataFailure,
  getIdSuccess,
  getIdFailure,
} from "../../Action/actionSaga";
import {
  getData,
  postData,
  deleteData,
  updateData,
  getId,
} from "../../../Services/mockApi";

function* getApi() {
  console.log("saga");
  const res = yield call(getData);
  console.log(res);

  if (res.status === 200 || res.status === 201) {
    yield put(getDataSuccess(res.data));
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
    yield put(postDataFailure("Failed"));
  }
}

function* deleteApi({ payload }) {
  console.log("saga", payload);
  const res = yield call(deleteData, payload);
  console.log(res);

  if (res.status === 200 || res.status === 201) {
    yield put(deleteDataSuccess(res.data));
  } else {
    yield put(deleteDataFailure("Failed"));
  }
}

// function* deleteApi({ payload }) {
//   console.log("saga", payload);
//   try {
//     yield put(deleteDataSuccess(payload));

//     const res = yield call(deleteData, payload);
//     console.log(res);

//     if (res.status === 200 || res.status === 201) {
//       yield put(deleteDataSuccess(res.data));
//     } else {
//       yield put(deleteDataFailure("Failed"));
//     }
//   } catch (error) {
//     console.error("Error during deleteApi:", error);
//     yield put(deleteDataFailure("Failed"));
//   }
// }

function* getIdApi({ payload }) {
  console.log("saga", payload);
  const res = yield call(getId, payload);
  console.log(res);

  if (res.status === 200 || res.status === 201) {
    yield put(getIdSuccess(res.data));
  } else {
    yield put(getIdFailure("Failed"));
  }
}

function* editApi(action) {
  console.log("saga", action);
  const res = yield call(updateData, action.payload, action.payload.id);
  console.log(res);

  if (res.status === 200 || res.status === 201) {
    yield put(updateDataSuccess(action.payload));
  } else {
    yield put(updateDataFailure("Failed"));
  }
}

export function* StudentWatcherSaga() {
  console.log("watchersaga");
  yield takeLatest(types.GET_REQUEST, getApi);
  yield takeLatest(types.POST_REQUSET, postApi);
  yield takeLatest(types.DELETE_REQUEST, deleteApi);
  yield takeLatest(types.UPDATE_REQUEST, editApi);
  yield takeLatest(types.GET_ID_REQUEST, getIdApi);
}
