import { useState } from "react";
import "./App.css";

function App() {
  const [side, setSide] = useState("");
  const [area, setArea] = useState(null);

  const calculateArea = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/area?side=${side}`
      );
      const data = await response.text();
      setArea(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div align="center" className="container">
      <h2>Square Area Calculator</h2>

      <input
        type="number"
        placeholder="Enter side"
        value={side}
        onChange={(e) => setSide(e.target.value)}
      />

      <button onClick={calculateArea}>Calculate</button>

      {area !== null && (
        <div className="result">Area = {area}</div>
      )}
    </div>
  );
}

export default App;