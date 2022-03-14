import { combineReducers } from "redux";
import { entitiesReducer } from "./entities";

export default combineReducers({
  entities: entitiesReducer,
});

//this our top level reducer
// we can combine entities reducer and UI reducers, basically all differnet types of
// reducers are combined here
