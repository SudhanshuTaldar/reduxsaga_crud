import { takeLatest, put } from "redux-saga/effects";

function* addAsync(action) {
  yield put({ type: "ADD_DATA_ASYNC", payload:action.payload });
}
function* updateAsync(action) {
    yield put({ type: "UPDATE_DATA_ASYNC", payload:action.payload });
}
function* deleteAsync(action) {
    yield put({ type: "DELETE_DATA_ASYNC", payload:action.payload });

}
export function* All() {
    yield takeLatest("ADD_DATA", addAsync);
    yield takeLatest("UPDATE_DATA", updateAsync);
    yield takeLatest("DELETE_DATA", deleteAsync);
}