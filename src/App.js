import "./App.css";
import { useStateValue } from "./StateProvider";
import TestComponents from "./TestComponents";

function App() {
  //  how we access to the counter
  const [{ counter }, dispatch] = useStateValue();

  return (
    <div>
      <TestComponents />
      <h1> let's try the Context Api</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "DECREMENT_COUNTER" });
        }}
      >
        -
      </button>
      {counter}
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "INCREMENT_COUNTER" });
        }}
      >
        +
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "INCREMENT_AMOUNT_COUNTER", payload: 20 });
        }}
      >
        +20
      </button>
      <p>reset</p>{" "}
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "RESET_COUNTER" });
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default App;
