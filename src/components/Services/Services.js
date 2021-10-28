import "../Home/Home.css";
import { Card, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom" ;

const Services = () => {
    
    const [AllCards, setAllCards] = useState([]);


    useEffect(()=>{
        fetch("./AllServices.json")
        .then(res => res.json())
        .then(data => setAllCards(data))
    },[]);

    return (

      <div>
                <h1 className="text-center">All Services</h1>

                <hr class="w justify-content-center d-flex align-items-center ms-auto me-auto span-color" />
                
                <br />
                <br />

                <div className="cardsStyles">
                {
                    AllCards.map(AllCard => <>
                    <Card  className=" cardsStyle colstyle mb-5">
                        <Card.Img variant="top" src={AllCard?.img} className="imgSize" />
                        <Card.Body>
                            <Card.Title>{AllCard?.title}</Card.Title>
                            <Card.Title>{AllCard?.price}</Card.Title>
                            <Card.Text>
                                {AllCard?.description}
                            </Card.Text>
                            <Link to={`/addService/${AllCard?.id}`}>
                                <Button variant="primary">Details</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    </>)
                }
                </div>
                
      </div>
    );
};

export default Services;