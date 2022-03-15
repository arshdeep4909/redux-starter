const toast = (store) => (next) => (action) => {
  if (typeof action === "error")
    console.log("Toastify", action.payload.message);
  else next(action);
};

export default toast;
