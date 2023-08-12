import "./styles.css";
import { useState } from "react";
export default function App() {
  const [val, setVal] = useState("");
  const [arr, setArr] = useState([]);
  const handler = (val) => {
    const newArr = [...arr, val];
    setArr(newArr);
  };
  console.log(arr);
  return (
    <div className="App">
      <div className="first-div">
        <h1>Count the characters like a boss...</h1>
        <img
          style={{ display: arr.length > 0 ? "none" : "block" }}
          alt=""
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        />
        <div>
          {arr.map((n, i) => (
            <div key={i}>
              <h1>{n + " : " + n.length}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="second-div">
        <h1>Character Counter</h1>
        <div className="inputs">
          <input onChange={(e) => setVal(e.target.value)} type="text" />
          <button onClick={() => handler(val)}>add</button>
        </div>
      </div>
    </div>
  );
}
