import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    setCounter(counter + 1);
    console.log("Value added", counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
    console.log("Value remove", counter - 1);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
