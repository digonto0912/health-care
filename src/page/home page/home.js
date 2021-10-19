import "./home.css";
import {Card, Accordion } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import svg1 from "../images/undraw_medical_care_movn.svg";
import svg2 from "../images/undraw_medicine_b1ol.svg";

const Home = () => {
    
    const [freecards, setfreecards] = useState([]);
    const [paidcards, setpaidcards] = useState([]);


    useEffect(()=>{
        fetch("./freeServices.json")
        .then(res => res.json())
        .then(data => setfreecards(data))
    },[]);

    useEffect(()=>{
        fetch("./paidServices.json")
        .then(res => res.json())
        .then(data => setpaidcards(data))
    },[]);


    return (
        <div>
            {/* header banner */}
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
                <img src={svg2} />
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div>
                <h1 className="text-center">All Services</h1>

                <hr class="w justify-content-center d-flex align-items-center ms-auto me-auto span-color" />
                
                <br />
                <br />
                <h1>Free Services</h1>
                <br />
                <div className="cardsStyles">
                {
                    freecards.map(freecard => <>
                    <Card  className=" cardsStyle colstyle mb-5">
                        <Card.Img variant="top" src={freecard?.img} className="imgSize" />
                        <Card.Body>
                            <Card.Title>{freecard?.title}</Card.Title>
                            <Card.Title>{freecard?.price}</Card.Title>
                            <Card.Text>
                                {freecard?.description}
                            </Card.Text>
                            <button href={freecard?.link}>Details</button>
                        </Card.Body>
                    </Card>
                    </>)
                }
                </div>

                <br />

                <h1>Paid Services</h1>

                <br />

                <div className="cardsStyles">
                {
                    paidcards.map(paidcard => <>
                    <Card  className=" cardsStyle colstyle mb-5">
                        <Card.Img variant="top" src={paidcard?.img} className="imgSize" />
                        <Card.Body>
                            <Card.Title>{paidcard?.title}</Card.Title>
                            <Card.Title>{paidcard?.price}</Card.Title>
                            <Card.Text>
                                {paidcard?.description}
                            </Card.Text>
                            <button href={paidcard?.link}>Details</button>
                        </Card.Body>
                    </Card>
                    </>)
                }
                </div>
            </div>


            <div className="Frequently-Asked-Questions container-8 justify-content-center align-items-center">
            <h1 className="d-flex justify-content-center align-items-center">Frequently Asked <span className="span-color ms-2 "> Questions</span></h1>

            <hr class="w justify-content-center d-flex align-items-center ms-auto me-auto span-color" />
            
            <div className="container1 img-and-accordion d-flex justify-content-center align-items-center">
                
                <div className="container1 col-xl-10 col-xxl-8 px-4 py-5">
                    <div className="row align-items-center g-lg-5 py-5">
                        {/* images  */}
                        <div className="row mx-auto col-lg-6 col-sm-3">
                            <img src={svg1} className="img-responsive" />
                        </div>
                        {/* accordion  */}
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How to define ending of COVID-19 local endemic?</Accordion.Header>
                                <Accordion.Body>
                                The SARS-CoV-2 (Covid-19) coronavirus pandemic is a global epidemic. On a global scale, the state of the pandemic in March 2020 was announced by the World Health Organization. Therefore, this organization could declare the end of the pandemic. On the other hand, the end of the epidemic on a regional, national or local scale can be announced by national central institutions of the health care system, including the ministries of health, in agreement with the government. In order to be able to declare the end of the epidemic on a national, regional or local scale, it is necessary to have a relatively large decrease in the number of new coronavirus infections, a decrease in the number of people seriously ill with Covid-19 disease and deaths caused by this disease. The decrease in Coronavirus infections and in sick people should be sustained in a longer period, i.e. min. several months, taking into account the periods of possible occurrence of subsequent epidemic waves caused by new variants of the Coronavirus and occurring in other regions of the world. In addition, an important factor that may be taken into account in the event of declaring the end of a pandemic on a global scale or an epidemic on a regional scale will be the level of vaccination of citizens with highly effective vaccines against Coronavirus and the level of social, collective immunity of the society achieved thanks to these vaccines.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Journal without a word count in the public health/general practice/older adults field?</Accordion.Header>
                                <Accordion.Body>
                                Have you considered Frontiers in Public Health? The word count is very high at 12,000 and also has various sub-journals to fit specific fields.
                                
                                <a>https://www.frontiersin.org/journals/public-health#article-types</a>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Why wasn’t the world prepared for the COVID-19?</Accordion.Header>
                                <Accordion.Body>
                                    The threat of pandemic disease is not new: For decades, public health experts advised that a coronavirus outbreak was looming, global proportions, and that the world was not equipped to fight it when it arrived. Why did governments not prepare in advance? 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            {/* from  */}
            <div className="container2 from-div d-flex justify-content-center align-items-center flex-column">
                <h1><span className="span-color">GET'S</span> MORE UPDATE</h1>
                
                <hr class="w justify-content-center d-flex align-items-center ms-auto me-auto span-color" />

                <h6> Get more updates </h6>
                <div className="email d-flex justify-content-center align-items-center">
                <form className="me-2" >
                    <input className="form-control" type="email" placeholder="Email" />
                </form>
                <button className="py-8 px-46">Send</button>
                </div>
            </div>

        </div>
    );
};

export default Home;