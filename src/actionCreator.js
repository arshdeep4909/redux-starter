import * as actions from "./actionTypes";

export const bugAdded = (description) => {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description,
    },
  };
};

export const bugRemoved = (id) => {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id: id,
    },
  };
};

export const bugResolved = (id) => {
  return {
    type: actions.BUG_RESOLVED,
    payload: {
      id: id,
    },
  };
};

//make us easy for us to edit our action we can do it in just one place
