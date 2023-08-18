
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [show, setShow] = useState(false);

  function changeShow() {
    setShow(!show);
  }

  const Model = () => {
    return (
      <div>
        <h3>Model Content</h3>
        <p>This is the model content</p>
      </div>
    )
  }
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div>
        <h2>Child Component</h2>
        <button onClick={changeShow}>Show Model</button>
        {show ? <Model /> : null}
      </div>
    </div>
  )

}

export default App
