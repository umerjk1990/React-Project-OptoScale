import { all, call } from "redux-saga/effects";
import postsSaga from "./posts/posts.sagas";
import usersSaga from "./users/users.sagas";

export default function* rootSaga() {
  yield all([
    call(postsSaga),
    call(usersSaga),
  ]);
}
