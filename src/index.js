import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actionCreator";

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

//based on the type of action it gets the reducer and then changes the state accordingly
// const newState = reducer(state, action) how source code for dispatch looks like
store.dispatch(bugAdded("Bug 1"));

//this is a higher level function which takes bug 1 as their argument
store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1));

unsubscribe();

console.log(store.getState());
