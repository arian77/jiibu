import React, { Component } from "react";
import "./App.css";

class Askquestion extends React.Component {
  render() {
    return (
      <div align="center">
        <br />
        <input type="text" name="firstname" placeholder="Your Question" />
        <br /> <br />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Askquestion;
