import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Answer from "./Answer";
import Profile from "./Profile";
import Askquestion from "./Askquestion";
import Logout from "./Logout";

import logo from "./logo.svg";
import "./App.css";

const Links = () => (
  <nav className="n">
    <Link className="logo" to="/">
      Jiibu{" "}
    </Link>
    <Link className="h" to="/">
      Home{" "}
    </Link>
    <Link className="a" to={{ pathname: "/answer" }}>
      Answer
    </Link>
    <Link className="p" to={{ pathname: "/profile" }}>
      Profile
    </Link>
    <Link className="q" to={{ pathname: "/question" }}>
      Ask Question
    </Link>
    <Link className="log" replace to="/logout">
      Logout
    </Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route path="/answer" component={Answer} />
      <Route path="/profile" component={Profile} />
      <Route path="/question" component={Askquestion} />
      <Route path="/logout" component={Logout} />
    </div>
  </Router>
);

export default App;
