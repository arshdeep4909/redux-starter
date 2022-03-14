//shows the innner working of the store. how different methods are
//implemented under the skin

import reducer from "./reducer";
function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    //call our reducer to get new state
    state = reducer(state, action);
    //notify the subscribers
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState() {
    return state;
  }
  return {
    subscribe,
    getState,
    dispatch,
  };
}

export default createStore(reducer);
