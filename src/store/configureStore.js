import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import func from "./middleware/func";
import toast from "./middleware/toast";

//this is a higher orde function because it take a function as an argument

export default function () {
  return configureStore({
    reducer: reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ desitnation: "console" }),
      toast,
    ],
  });
}

//since we are using redux toolkit here we can pass middleware like this
// if we used createStore from redux then the process would have been different

//would pass it like this

// const store = createStore(reducer, applyMiddleware(logger))
