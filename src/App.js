import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "rgb(4 17 33)";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze"
                theme={theme}
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About theme={theme}/>
            }
          />
          </Routes>
      </Router>
    </>
  );
}

export default App;
