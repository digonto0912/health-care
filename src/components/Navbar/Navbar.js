import React from 'react';
import "./Navbar.css";
import { 
    Navbar,
    Nav,
    Container 
  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from '../../hooks/useAuth';

const NavBar = () => {
    const {user,logOut} = useAuth();
    return (
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
              <Link className="navStyle" to="/AllServices">All Services</Link>
            </Nav.Link>
            <Nav.Link className="navStyles">
              <Link className="navStyle" to="/about">About</Link>
            </Nav.Link>
            <Nav.Link className="navStyles">
              <Link className="navStyle" to="/profile">profile</Link>
            </Nav.Link>
            <Nav.Link className="navStyles">
              <Link className="navStyle" to="/signup">signup</Link>
            </Nav.Link>
            {
            user.email ? 
            <Nav.Link className="navStyles">
              <Link className="navStyle" onClick={logOut}>signout</Link>
            </Nav.Link>
            :
            <Nav.Link className="navStyles">
              <Link className="navStyle" to="/signin">signin</Link>
            </Nav.Link>
            }
            <Nav.Link>
            <div>loged :{user?.displayName}</div>
            </Nav.Link>

          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
};

export default NavBar;