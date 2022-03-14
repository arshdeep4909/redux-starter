import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";

//this is a higher orde function because it take a function as an argument

export default function () {
  return configureStore({ reducer: reducer });
}
