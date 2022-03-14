import configurestore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
} from "./store/bugs";

import { projectAdded } from "./store/projects";

const store = configurestore();

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

//based on the type of action it gets the reducer and then changes the state accordingly
// const newState = reducer(state, action) how source code for dispatch looks like
store.dispatch(projectAdded({ name: "project 1" }));
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
//this is a higher level function which takes bug 1 as their argument

store.dispatch(bugResolved({ id: 1 }));
unsubscribe();
store.dispatch(bugRemoved({ id: 2 }));

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());

console.log(x === y);
