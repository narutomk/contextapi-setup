import React from "react";
import { useStateValue } from "./StateProvider";

function TestComponents() {
  const [{ counter }, dispatch] = useStateValue();

  return (
    <div>
      <p>we can see the counter from here its the power of ContextApi !</p>
      {counter}
    </div>
  );
}

export default TestComponents;
