import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showalert("Dark Mode Enabled", "success");
      document.title = "Textutils Dark Mode";
    } else {
      setMode("light");
      document.body.style.background = "white";
      showalert("Light Mode Has Been Enabled", "success");
      document.title = "Textutils Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title=" Text Utils" mode={mode} togglemode={toggle} />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
        <Textform showAlert={showalert} heading="Enter a text to analyze " mode={mode} />
        {/* <Route exact path="/" element={<Textform showAlert={showalert} heading="Enter a text to analyze " mode={mode} />} /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
