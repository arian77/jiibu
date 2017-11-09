import React, { Component } from "react";
import "./App.css";

class Askquestion extends Component {
  render() {
    return (
      <div align="center">
        <br />
        <textarea
          className="textarea"
          placeholder="What is your Question ? "
          rows="4"
          cols="50"
          placeholder="What is your Question ? "
        />
        <br />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Askquestion;
