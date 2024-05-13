import { all } from "redux-saga/effects";
import { StudentWatcherSaga } from "./SagaReducer/ComponentSaga";

function* rootSaga() {
  console.log("rootsaga");
  yield all([StudentWatcherSaga()]);
}

export default rootSaga;
