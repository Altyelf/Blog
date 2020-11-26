import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/404";
import Post from "./pages/posts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

const App = () => {
  
  return (
    <>
      <Router>
        <div className="nav__wrapper">
          <Link className="nav" to="/">
            Home
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link className="nav" to="/about">
            About
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link className="nav" to="/posts">
            Posts
          </Link>
          &nbsp;&nbsp;&nbsp;
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
