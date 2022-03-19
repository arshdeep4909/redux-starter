import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [], //the list of bugs will come here
    loading: false, // used to display a loading icon when loading is true
    lastFetch: null, // timestamp of the last time we called the server
    //useful for implementing caching, if the last time we called the server
    //was 20seconds ago then we do not need to call again and we can just
    //display the same data
  },
  reducers: {
    bugReceived: (bugs, action) => {
      bugs.list = action.payload;
    },
    //actions => actionhandlers
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },

    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugRemoved: (bugs, action) => {
      return bugs.list.filter((bug) => bug.id !== action.payload.id);
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved, bugAssignedToUser } =
  slice.actions;
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

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,

    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

// //Selector function - takes a state and return computed state
// export const getUnresolvedBugs = (state) =>
//   state.entities.bugs.filter((bug) => bug.resolved);

// this function works too but it returns a new array each time even
//though the results are the same
