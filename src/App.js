import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App" style={{ margin: "1rem" }}>
      <h1>Counter App</h1>
      <div>
        <h2>Count: {count}</h2>
      </div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
