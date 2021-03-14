// Import useState Hook for use
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";

function App() {
  // Destructoring State we need to keep track off
  const [inputs, setInputs] = useState({
    // attributes passed into form
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Single one to one
  // const [firstName, setfirstName] = useState("")

  return (
    <div className="App">
      <Form inputs={inputs} setInputs={setInputs} />
    </div>
  );
}

export default App;
