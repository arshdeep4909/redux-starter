import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";

//this is a higher orde function because it take a function as an argument

export default function () {
  return configureStore({
    reducer: reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ desitnation: "console" }),
      toast,
      api,
    ],
  });
}

//since we are using redux toolkit here we can pass middleware like this
// if we used createStore from redux then the process would have been different
