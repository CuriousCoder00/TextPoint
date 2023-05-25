import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here..");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleOnFocus = () => {
    if (text === "Enter text here..") {
      setText(" ");
    } else {
      setText(text);
    }
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };
  const handleCleartext = () => {
    setText("Enter text here..");
  };
  const handleCopy = () => {
    let textBox = document.getElementById("myTextbox");
    textBox.select();
    navigator.clipboard.writeText(textBox.value);
  };


  return (
    <div className={`container text-${props.theme==='dark'?'light':'dark'}`}>
      <div className="container">
        <h3 className="mt-2">{props.heading}</h3>
        <div className="mt-3 mb-3">
          <textarea
            className={`form-control text-${props.theme==='dark'?'light':'dark'} bg-${props.theme==='dark'?'black':'light'}`}
            id="myTextbox"
            rows="6"
            value={text}
            onFocus={handleOnFocus}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </div>
      <div className="container">
        <button className={`btn btn-${props.theme==='dark'?'primary':'dark'} mx-1`} onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className={`btn btn-${props.theme==='dark'?'primary':'dark'} mx-1`} onClick={handleLowClick}>
          Convert To Lowercase
        </button>
        <button className={`btn btn-${props.theme==='dark'?'primary':'dark'} mx-1`} onClick={handleCleartext}>
          Clear Text
        </button>
        <button className={`btn btn-${props.theme==='dark'?'primary':'dark'} mx-1`} onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.011 * text.split(" ").length} Minutes Average Reading Time</p>
      </div>
      <div className="container">
        <h3>Preview</h3>
        <p>
          {text === "Enter text here.." && text.length > 0
            ? "Enter something in the abovce text box to preview it here..."
            : text}
        </p>
      </div>
    </div>
  );
}
