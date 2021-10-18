import React from 'react';
import "./home.css";
import bannerImg from "../images/2.png";

const Home = () => {
    return (
        // header banner
        <div className="headerBanner">

            {/* text */}
            <div className="headerText">
                <h1>
                    <b>
                        Happy Body, Happy Life
                        <br /> 
                        Happy World
                    </b>
                </h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque minus laboriosam magnam id laborum sed accusamus tempore non hic molestias?
                </p>
            </div>

            {/* img */}
            <img src={bannerImg} />
        </div>
    );
};

export default Home;