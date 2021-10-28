import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Profile from './components/Profile/Profile';
import Signin from './components/signin/signin';
import NotFound from './components/NotFound/NotFound';
import Service from './components/Service/Service';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import Signup from './components/signup/signup';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route path ="/home">
          <Home></Home>
        </Route>
        <Route path ="/AllServices">
          <Services></Services>
        </Route>
        <Route path ="/about">
          <About></About>
        </Route>
        <PrivateRoute path="/profile">
          <Profile></Profile>
        </PrivateRoute>
        <Route path="/signin">
          <Signin></Signin>
        </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
          <PrivateRoute path="/addService/:id">
            <Service></Service>
          </PrivateRoute>
        <Route path ="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      
      </BrowserRouter>
      </AuthProvider>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
