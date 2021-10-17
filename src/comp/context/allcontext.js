import React, { createContext } from 'react';
import Login from '../login/login';

const Allcontext = (props) => {
    const {children} = props;
    const authContext = createContext("emnai just for fun");
    const demo = "demodsmdks"
    return (
        <authContext.provider value={demo}>
            {children}
        </authContext.provider>
    )
};

export default Allcontext;