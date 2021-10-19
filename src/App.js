import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Firebasehuck from "./page/hucks/firebasehuck";
import { 
  Navbar,
  Nav,
  Container 
} from 'react-bootstrap';
import Signin from "./page/signin/signin";
import Signup from "./page/signup/signup";
import Home from "./page/home page/home";


function App() {

  const {signOutfunction} = Firebasehuck();
  const {user} = Firebasehuck();


// about 
  function About() {
    return <h2>About</h2>;
  }

    return (

      <authContext>
      <Router>
        <div>


          {/* location */}

          <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
              <Navbar.Brand><b>Happy Health</b></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">

                <Nav.Link className="navStyles">
                  <Link className="navStyle" to="/">Home</Link>
                </Nav.Link>
                <Nav.Link className="navStyles">
                  <Link className="navStyle" to="/about">About</Link>
                </Nav.Link>
                <Nav.Link className="navStyles">
                  <Link className="navStyle" to="/signin">signin</Link>
                </Nav.Link>
                <Nav.Link className="navStyles">
                  <Link className="navStyle" to="/signup">signup</Link>
                </Nav.Link>
                <Nav.Link className="navStyles">
                  <Link className="navStyle" onClick={signOutfunction}>signout</Link>
                </Nav.Link>
                <Nav.Link>
                <div>loged :{user.email}</div>
                </Nav.Link>

              </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* place */}

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/signin">
              <Signin />
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

      <footer className="text-center h-5 mt-5 p-5 copyright-2021">
        Copyright 2021
      </footer>
      </authContext>
    );
  }



export default App;
