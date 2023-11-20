import { useState } from "react";
import "./styles.css";

export default function App() {
  const [buttonColor, setButtonColor] = useState("red");
  return (
    <div className="App">
      <h1>UNIT TESTING LEARNING</h1>
      <button onClick={() => setButtonColor("blue")} type="button">
        {buttonColor}
      </button>
    </div>
  );
}
