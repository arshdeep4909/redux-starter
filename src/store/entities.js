import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectsReducer from "./projects";
// these names bugsReducer and projectReducer might be coming from our
// default exports

export const entitiesReducer = combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
});
