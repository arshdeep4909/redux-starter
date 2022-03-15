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

store.dispatch({
  type: "apiCallBegan",
  payload: {
    url: "/bugs",
    // method: "get", by default get is used so we don't need to define the method
    onSuccess: "bugsReceived",
    onError: "apiRequestFailed",
  },
});
