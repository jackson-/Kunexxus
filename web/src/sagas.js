import { call, put,  takeLatest } from 'redux-saga/effects'
import agent from './agent';
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* loginUser(action) {
   try {
      const data = yield call(agent.Auth.login, action.payload.email, action.payload.password);
      yield put({type: "LOGIN_SUCCEEDED", user: data.user});
   } catch (e) {
      console.log("E", e)
      yield put({type: "LOGIN_FAILED", message: e.errors});
   }
}

function* registerUser(action) {
   try {
      const data = yield call(agent.Auth.register, action.payload.email, action.payload.password);
      yield put({type: "REGISTER_SUCCEEDED", user: data.user});
   } catch (e) {
      console.log("E", e)
      yield put({type: "REGISTER_FAILED", message: e.errors});
   }
}

function* getProjects(action) {
   try {
      const data = yield call(agent.Projects.all);
      yield put({type: "GET_PROJECTS_SUCCEEDED", projects: data.projects});
   } catch (e) {
      console.log("E", e)
      yield put({type: "GET_PROJECTS_FAILED", message: e.errors});
   }
}

function* createProject(action) {
    debugger;
   try {
      const data = yield call(agent.Projects.create_project,
        action.payload.title,
        action.payload.description,
        action.payload.email);
      yield put({type: "CREATE_PROJECT_SUCCEEDED"});
   } catch (e) {
      console.log("E", e)
      yield put({type: "GET_PROJECTS_FAILED", message: e.errors});
   }
}


function* mySaga() {
  yield takeLatest("LOGIN", loginUser);
  yield takeLatest("REGISTER", registerUser);
  yield takeLatest("GET_PROJECTS", getProjects);
  yield takeLatest("CREATE_PROJECT", createProject);
}

export default mySaga;
