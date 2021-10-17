import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Firebasegoogle from "./comp/hucks/firebasegoogle";
// login and signup
import Login from "./comp/login/login";
import Signup from "./comp/signup/signup";


function App() {

  const {signOutfunction} = Firebasegoogle();

// home
  function Home() {
    return <h2>Home</h2>;
  }

// about 
  function About() {
    return <h2>About</h2>;
  }

    return (
      <authContext>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="/signup">signup</Link>
              </li>
              <button onClick={signOutfunction}>signout</button>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      </authContext>
    );
  }



export default App;
