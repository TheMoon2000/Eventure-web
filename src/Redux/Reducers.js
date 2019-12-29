import { createStore } from "redux";
import { maxHeaderSize } from "http";

const currentUser = {
  "accountType": "student",
  "userInfo": {}
}

function userReducer(state=currentUser, action) {
  return Object.assign({}, state);
}

function tabReducer(state = 0, action) {
  return action.index;
}

// const userStore = createStore(userReducer)
const tabStore = createStore(tabReducer)
let index = ["#events", "#organizations", "#account"].indexOf(document.location.hash);
tabStore.dispatch({ type: "update", index: index >= 0 ? index : 0 })
console.log("current tab", tabStore.getState())
window.store = tabStore;

export default tabStore;