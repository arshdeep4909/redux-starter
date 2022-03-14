import { createStore } from "redux";
import reducer from "./reducer";

//this is a higher orde function because it take a function as an argument
const store = createStore(reducer);

export default store;
