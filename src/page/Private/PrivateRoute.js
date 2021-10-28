import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";
import UseAuth from "../Hooks/useAuth" ;
import UseFirebase from "../Hooks/useFirebase";

const PrivateRoute = (props) => {
    const {children, ...rest} = props;
    const { user } = UseAuth();
    console.log(user);
    

    return (
      <Route
        {...rest}
        render={({ location }) =>
          user?.email ? 
            children : 
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location }
              }}
              ></Redirect>}
      ></Route>
    );
  };

export default PrivateRoute;



// -----------------------------------------------------------------------------------------------


// import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';

// const PrivateRoute = (props) => {
//   const {children, ...rest} = props;
//     const { user } = useAuth();
  
//     return (
//         <Route
//             {...rest}
//             render={({ location }) => user.email ?
//                 children :
//                 <Redirect
//                     to={{
//                         pathname: "/login",
//                         state: { from: location }
//                     }}
//                 ></Redirect>}
//         >

//         </Route>
//     );
// };

// export default PrivateRoute;