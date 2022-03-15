//SNA
const logger = (param) => (store) => (next) => (action) => {
  console.log("console", param);

  next(action);
  //this will call reducer || our next middleware functin in pipeline
  //in this  case it is func
};

export default logger;
