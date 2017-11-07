import React, { Component } from "react";

class Answer extends React.Component {
  render() {
    return (
      <div align="center">
        <br />
        <a href="/question/1"> How to learn Redux? </a>
        <h6>Budi</h6>
        <p>You must search for Egghead video to learn Redux</p>
        <br />
        <a href="/question/1"> what is Node.js? </a>
        <h6>George</h6>
        <p>it is a platform to make asynchronous programming </p>
      </div>
    );
  }
}

export default Answer;
