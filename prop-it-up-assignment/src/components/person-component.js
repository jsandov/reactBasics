import React, { Component } from "react";

class Person extends Component {
  render() {
    /**
     * Destructuring props that we need
     * firstName, lastName, age, hairColor
     */
    const { firstName, lastName, age, hairColor } = this.props;

    return (
      <div>
        <h1>
          {lastName}, {firstName}
        </h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
      </div>
    );
  }
}

export default Person;
