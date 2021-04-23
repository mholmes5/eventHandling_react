import React, { useState } from "react";

function App() {
  //const [headingText, setHeadingText] = useState("Hello");
  const [background, setBackground] = useState("#FFF");
  const [isMousedOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [submission, setSubmission] = useState("");

  function handleClick() {
    //setHeadingText("Submitted");
    setSubmission(name);
  }

  function mouseOut() {
    //console.log("Mouse Out");
    setBackground("#FFF");
    setMouseOver(false);
  }

  function mouseOver() {
    //console.log("Mouse Over");
    setBackground("#111");
    setMouseOver(true);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {submission}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        style={{
          backgroundColor: background,
          color: isMousedOver ? "#50a3a2" : "#600"
        }}
        onClick={handleClick}
        onMouseOut={mouseOut}
        onMouseOver={mouseOver}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
