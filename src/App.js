import React from "react";
import "./App.css";

function App() {
  const topic = "React";
  const age = 39;
  const likes = ["React", "JavaScript", "TypeScript"];
  return (
    <div id="someId">
      {/* This is a comment */}
      <h1 id="headerId">{topic} is Awesome!</h1>
      <h2>{age}</h2>
      <h3>{likes}</h3>
      <h4>{String(true)}</h4>
      {true ? <p>Yup it's true</p> : <p>Nope it's false</p>}
    </div>
  );
}

export default App;
