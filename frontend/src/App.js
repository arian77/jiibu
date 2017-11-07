import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

const Links = () => (
  <nav className="n">
    <Link className="h" to="/">
      Home{" "}
    </Link>
    <Link className="p" to={{ pathname: "/answer" }}>
      Answer
    </Link>
    <Link className="c" replace to="/question">
      Ask Question
    </Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home </h1>} />
      <Route path="/answer" render={() => <h1>Answer </h1>} />
      <Route path="/question" render={() => <h1> Ask Question </h1>} />
    </div>
  </Router>
);

export default App;
