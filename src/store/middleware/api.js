import axios from "axios";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== "apiCallBegan") {
      return next(action);
    }
    //no if we get here this means that we are dealing with action
    //here then we need to follow three steps
    // 1. calling an API
    // 2. promise resolved
    // 3. promise rejected
    next(action);
    const { url, method, data, onSuccess, onError } = action.payload;

    //using axios to make an API call
    //this api call will then return a promise
    try {
      const response = await axios.request({
        baseURL: "http://localhost:9001/api/",
        url, // url of our end ponit, that gets added to base URL
        method,
        data,
      });
      // if evething work well then we need to dispatch action
      //with type success, & on the payload we have to give it the result
      //of our API call
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      //if something goes wrong then we are going to dispatch action with type onError
      dispatch({ type: onError, payload: error });
    }
  };

export default api;
