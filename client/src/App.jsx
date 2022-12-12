import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Input from "./components/Input";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>HOLIDAYS</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
