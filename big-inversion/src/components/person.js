import React from "react";

const Person = (props) => {
  return (
    <div>
      <h1>
        {props.lastName}, {props.firstName}
      </h1>
      <p> Age: {props.ageCounter}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button>
        Birthday Button for {props.firstName} {props.lastName}
      </button>
    </div>
  );
};

export default Person;
