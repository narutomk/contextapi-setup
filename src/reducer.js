export const initialState = {
  counter: 0,
};
// reducer

function reducer(state, action) {
  switch (action.type) {
    //action type
    case "INCREMENT_COUNTER":
      return { counter: state.counter + 1 };
    case "DECREMENT_COUNTER":
      return { counter: state.counter - 1 };
    case "RESET_COUNTER":
      return { counter: 0 };
    default:
      return state;
  }
}
export default reducer;
