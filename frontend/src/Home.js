import React, { Component } from "react";

class Home extends React.Component {
  render() {
    return (
      <div align="center">
        <br />
        <textarea className="textarea" rows="4" cols="50">
          What is your Question ?
        </textarea>
        <br />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Home;
