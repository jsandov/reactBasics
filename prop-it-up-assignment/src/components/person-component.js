import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ageCounter: props.age,
    };
  }
  render() {
    /**
     * Destructuring props that we need
     * firstName, lastName, age, hairColor
     */
    const { firstName, lastName, hairColor } = this.props;

    return (
      <div>
        <h1>
          {lastName}, {firstName}
        </h1>
        <p>Age: {this.state.ageCounter}</p>
        <p>Hair Color: {hairColor}</p>
        <button
          onClick={() =>
            this.setState({ ageCounter: this.state.ageCounter + 1 })
          }
        >
          Birthday Button for {firstName} {lastName}
        </button>
      </div>
    );
  }
}

export default Person;
