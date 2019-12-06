import { createStore } from "redux";

const currentUser = {
  "accountType": "student",
  "userInfo": {}
}

function userReducer(state=currentUser, action) {
  return Object.assign({}, state);
}

function tabReducer(state=0, action) {
  return action.index;
}

// const userStore = createStore(userReducer)
const tabStore = createStore(tabReducer)
window.store = tabStore;

export default tabStore;