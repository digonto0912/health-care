import "./AllServices.css";
import "../home page/home.css";
import {Card, Accordion } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const AllServices = () => {
    
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
    );
};

export default AllServices;