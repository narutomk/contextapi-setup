export const initialState = {
  counter: 0,
  item: [],
};
// reducer

const reducer = (state, action) => {
  //to check our state !
  console.log(state);
  switch (action.type) {
    //action type
    case "INCREMENT_COUNTER":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT_COUNTER":
      return { ...state, counter: state.counter - 1 };
    case "RESET_COUNTER":
      return { ...state, counter: 0 };
    default:
      return state;
  }
};
export default reducer;
