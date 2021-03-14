import React from "react";

const Form = (props) => {
  // Getters and Setters

  const updateUserState = (event) => {
    //make clone
    const inputsClone = { ...props.inputs };

    inputsClone[event.target.name] = event.target.value;

    props.setInputs(inputsClone);
  };
  return (
    <form onSubmit={(event) => {}}>
      <label htmlFor="firstName">First Name</label>
      <input
        onChange={(event) => {
          updateUserState(event);
        }}
        type="text"
        name="firstName"
      />
      <label htmlFor="firstName">First Name</label>
      <input
        onChange={(event) => {
          updateUserState(event);
        }}
        type="text"
        name="firstName"
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
