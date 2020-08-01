import React, { Component } from "react";

class Example extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      isLoaded: false
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`/api/example`);
      const data = await res.json();
      this.setState({
        students: data,
        isLoaded: true
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.state.students);
    return this.state.isLoaded ? (
      <ul>
        {this.state.students.map((el, index) => {
          return <li key={index}>{el.name}</li>;
        })}
      </ul>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default Example;
