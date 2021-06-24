const PressedbackReducer = (state = 0, action) => {
  if (action.type === 0) {
    return 0;
  } else if (action.type === 1) {
    return 1;
  } else {
    return state;
  }
};
export default PressedbackReducer;
