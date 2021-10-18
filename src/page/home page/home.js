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
                        Happy Health, Happy Life
                        <br /> 
                        Happy World
                    </b>
                </h1>

                <p>
                    Access to health care may vary across countries, communities, and individuals, influenced by social and economic conditions as well as health policies. Providing health care services means "the timely use of personal health services to achieve the best possible health outcomes"
                </p>
            </div>

            {/* img */}
            <img src={bannerImg} />
        </div>
    );
};

export default Home;