import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    //actions => actionhandlers
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugRemoved: (bugs, action) => {
      return bugs.filter((bug) => bug.id !== action.payload.id);
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;
export default slice.reducer;

//Memoization
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  //the output of this function will get passed to the
  //result function
  (bugs) => bugs.filter((bug) => !bug.resolved)
  // this function will not be executed again if the list of bugs
  //does not change
);

// //Selector function - takes a state and return computed state
// export const getUnresolvedBugs = (state) =>
//   state.entities.bugs.filter((bug) => bug.resolved);

// this function works too but it returns a new array each time even
//though the results are the same
