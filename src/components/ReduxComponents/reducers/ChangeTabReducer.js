const ChangeTabReducer = (state = 1, action) => {
  if (action.type === 0) {
    return 0;
  } else if (action.type === 1) {
    return 1;
  } else if (action.type === 2) {
    return 2;
  } else if (action.type === 3) {
    return 3;
  } else {
    return state;
  }
};
export default ChangeTabReducer;
