import React, { Component } from "react";
import "./App.css";

class Welcome extends Component {
  render() {
    return (
      <div class="container" align="center">
        <h1> Jiibu </h1>

        <div class="signup">
          <br />
          <h5>Register</h5>
          <input type="text" name="firstname" placeholder="fullname " />
          <br /> <br />
          <input type="text" name="email" placeholder="email " />
          <br /> <br />
          <input type="text" name="password" placeholder="password" />
          <br /> <br />
          <input type="submit" value="sign up" />
        </div>
        <div class="login">
          <h5>Login</h5>
          <input type="text" name="email" placeholder="email " />
          <br /> <br />
          <input type="text" name="password" placeholder="password" />
          <br /> <br />
          <input type="submit" value="login" />
        </div>
      </div>
    );
  }
}

export default Welcome;
