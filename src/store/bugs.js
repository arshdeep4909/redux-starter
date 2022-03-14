import { createSlice } from "@reduxjs/toolkit";

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
  },
  bugRemoved: (bugs, action) => {
    return state.filter((bug) => bug.id !== action.payload.id);
  },
  bugResolved: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state[index].resolved = true;
  },
});

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;
export default slice.reducer;

// //---------ACTION CREATORS-----------

// export const bugAdded = createAction("bugAdded");
// export const bugRemoved = createAction("bugRemoved");
// export const bugResolved = createAction("bugResolved");

// //make us easy for us to edit our action we can do it in just one place

// // //----REDUCER (using redux tool kit)--------

// // let lastId = 0;

// // export default createReducer([], {
// //   //key : value
// //   //actions : functions
// //   [bugAdded.type]: (state, action) => {
// //     state.push({
// //       id: ++lastId,
// //       description: action.payload.description,
// //       resolved: false,
// //     });
// //   },
// //   [bugRemoved.type]: (state, action) => {
// //     return state.filter((bug) => bug.id !== action.payload.id);
// //   },
// //   [bugResolved.type]: (state, action) => {
// //     const index = state.findIndex((bug) => bug.id === action.payload.id);
// //     state[index].resolved = true;
// //   },
// // });

// // // this function is a pure function- it return the same results each time the
// // //arguments passed are the same
// // let initalState = [];

// // export function reducer(state = initalState, action) {
// //   switch (action.type) {
// //     case bugAdded.type:
// //       return [
// //         ...state,
// //         {
// //           id: ++lastId,
// //           description: action.payload.description,
// //           resolved: false,
// //         },
// //       ];

// //     case bugRemoved.type:
// //       return state.filter((bug) => bug.id === action.payload.id);

// //     case bugResolved.type:
// //       return [
// //         state.map((bug) =>
// //           bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
// //         )[0],
// //       ];
// //     default:
// //       //if we disptach an action that does not exist we want our state
// //       // to remain the same
// //       state;
// //   }
// // }

// // export default reducer;

// // - - - -  - NOTES - - - -  - -
// // const bugUpdated = createAction("bugUpdated");
// // console.log(action({ id: 1 }));
// // this return an actionCreator with type: bugUpdated and whatever is passed
// //within the action is added to the pyload

// //both these function does the same thing

// // export const bugAdded = (description) => {
// //     return {
// //       type: BUG_ADDED,
// //       payload: {
// //         description,
// //       },
// //     };
// //   };

// // so we do this to get easy code refactoring
// // In future when we need to change our action.type we can just change it here
// //rather than going to our reducer and then also changing it in our dipatch
