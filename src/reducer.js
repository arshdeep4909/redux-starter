// [] is going to be the store
let lastId = 0;
// this function is a pure function- it return the same results each time the
//arguments passed are the same
let initalState = [];
function reducer(state = initalState, action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      //if we disptach an action that does not exist we want our state
      // to remain the same
      state;
  }
}

export default reducer;
