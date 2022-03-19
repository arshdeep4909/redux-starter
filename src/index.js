import configurestore from "./store/configureStore";
import * as actions from "./store/api";

const store = configurestore();

store.dispatch(
  actions.apiCallBegan({
    url: "/bugs",
    onSuccess: "bugs/bugsReceived",
  })
);

//the implementation above using action creators is much easier

// store.dispatch({
//   type: "apiCallBegan",
//   payload: {
//     url: "/bugs",
//     // method: "get", by default get is used so we don't need to define the method
//     onSuccess: "bugsReceived",
//     onError: "apiRequestFailed",
//   },
// });
