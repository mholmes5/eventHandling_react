import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [background, setBackground] = useState("#FFF");
  const [isMousedOver, setMouseOver] = useState(false);

  console.log(background);

  function handleClick() {
    setHeadingText("Submitted");
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

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
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
