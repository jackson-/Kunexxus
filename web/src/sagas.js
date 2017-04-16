import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import agent from './agent';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loginUser(action) {
   try {
      const data = yield call(agent.Auth.login, action.payload.email, action.payload.password);
      yield put({type: "LOGIN_SUCCEEDED", user: data.user});
   } catch (e) {
      console.log("E", e)
      yield put({type: "LOGIN_FAILED", message: e.errors});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("LOGIN", loginUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("LOGIN", loginUser);
}

export default mySaga;
