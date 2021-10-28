import React from 'react';
import "./NotFound.css";
import error from '../../images/404.svg'

const NotFound = () => {
    return (
        <div className="NF404">
            <img src={error} className="m-auto mt-5 mb-5 justify-content-center align-items-center" />
        </div>
    );
};

export default NotFound;