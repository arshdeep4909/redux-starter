import configurestore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  getBugsByUser,
  bugAssignedToUser,
} from "./store/bugs";

import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configurestore();

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

//based on the type of action it gets the reducer and then changes the state accordingly
// const newState = reducer(state, action) how source code for dispatch looks like
store.dispatch(userAdded({ name: "Arsh" }));
// store.dispatch(userAdded({ name: "Mosh" }));
// store.dispatch(projectAdded({ name: "project 1" }));
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugAdded({ description: "Bug 4" }));
// store.dispatch(bugAdded({ description: "Bug 5" }));
// store.dispatch(bugAdded({ description: "Bug 6" }));
// const bugByUserId = getBugsByUser(1)(store.getState());
// console.log(bugByUserId);

// store.dispatch(bugResolved({ id: 1 }));
// unsubscribe();
// store.dispatch(bugRemoved({ id: 2 }));
