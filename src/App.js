import { useEffect, useState } from "react";
import "./App.css";
export default function App() {
  const [advice, setAdvice] = useState("");
  const [counter, setCounter] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCounter((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Messages count={counter} />
    </div>
  );
}

function Messages(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice.
    </p>
  );
}
