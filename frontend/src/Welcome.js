import React, { Component } from "react";
import "./App.css";

class Welcome extends Component {
  render() {
    return (
      <div align="center">
        <br />
        <h1> JIIBU </h1>
        <h5>Register</h5>
        <input type="text" name="firstname" placeholder="fullname " />
        <br /> <br />
        <input type="text" name="email" placeholder="email " />
        <br /> <br />
        <input type="text" name="password" placeholder="password" />
        <br /> <br />
        <input type="submit" value="Submit" />
        <hr />
        <h5>Login</h5>
        <input type="text" name="email" placeholder="email " />
        <br /> <br />
        <input type="text" name="password" placeholder="password" />
        <br /> <br />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Welcome;
