import * as actions from "./actionTypes";

export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: "Bug1",
    },
  };
}

export const bugRemoved = (id) => {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id: id,
    },
  };
};

//make us easy for us to edit our action we can do it in just one place
