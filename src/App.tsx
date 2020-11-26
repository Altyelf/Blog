import React, {useEffect} from 'react';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/404'
import Posts from './components/posts/posts'
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
        <Link to="/">Home</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to="/about">About</Link>
        &nbsp; &nbsp; &nbsp;
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;