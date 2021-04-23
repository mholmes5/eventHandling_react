import React, { useState } from "react";

function App() {
  //const [headingText, setHeadingText] = useState("Hello");
  const [background, setBackground] = useState("#FFF");
  const [isMousedOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [submission, setSubmission] = useState("");

  function handleClick(event) {
    //setHeadingText("Submitted");
    setSubmission(name);
    event.preventDefault();
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
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          style={{
            backgroundColor: background,
            color: isMousedOver ? "#50a3a2" : "#600"
          }}
          onMouseOut={mouseOut}
          onMouseOver={mouseOver}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
