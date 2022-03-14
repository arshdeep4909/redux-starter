import configurestore from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configurestore();

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

//based on the type of action it gets the reducer and then changes the state accordingly
// const newState = reducer(state, action) how source code for dispatch looks like
store.dispatch(projectAdded({ name: "project 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 2" }));
store.dispatch(actions.bugAdded({ description: "Bug 3" }));
//this is a higher level function which takes bug 1 as their argument

store.dispatch(actions.bugResolved({ id: 1 }));
unsubscribe();
store.dispatch(actions.bugRemoved({ id: 2 }));

console.log(store.getState());
