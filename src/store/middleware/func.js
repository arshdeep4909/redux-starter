//at this point we have already run our logger and we are now going to run
//func & after this we will run the reducer because we do not have any more
//middleware functions to run

const func = (store) => (next) => (action) => {
  if (typeof action === "function") action();
  // the action in this case refers to the action we define in our index.js file
  // if the action is a function then we want to run the function
  // in our case which will return the API call that we made
  else next(action);
  // otherwise we want to run the reducer or the next middleware function
};

export default func;
