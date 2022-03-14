import store from "./store";
import { bugAdded, bugRemoved } from "./actionCreator";

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

//based on the type of action it gets the reducer and then changes the state accordingly
// const newState = reducer(state, action) how source code for dispatch looks like
store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugAdded("Bug 2"));
store.dispatch(bugAdded("Bug 2"));
store.dispatch(bugAdded("Bug 4"));
store.dispatch(bugAdded("Bug 5"));
store.dispatch(bugAdded("Bug 6"));
//this is a higher level function which takes bug 1 as their argument

unsubscribe();

store.dispatch(bugRemoved(1));
store.dispatch(bugRemoved(3));
store.dispatch(bugRemoved(5));

console.log(store.getState());
