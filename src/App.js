import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'


function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
      document.body.style.backgroundColor = 'rgb(4 17 33)';
    } else {
      setTheme('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
      <TextForm heading="Enter the text to analyze" theme={theme}/>
    </>
  );
}

export default App;
