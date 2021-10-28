import "../Home/Home.css";
import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const Services = () => {
    
    const [Services, setServices] = useState([]);

    useEffect(()=>{
        fetch("./AllServices.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    return (

      <div>
                <h1 className="text-center">All Services</h1>

                <hr class="w justify-content-center d-flex align-items-center ms-auto me-auto span-color" />
                
                <br />
                <br />

                <div className="cardsStyles">
                {
                    Services.map(Service => <>
                    <Card  className=" cardsStyle colstyle mb-5">
                        <Card.Img variant="top" src={Service?.img} className="imgSize" />
                        <Card.Body>
                            <Card.Title>{Service?.title}</Card.Title>
                            <Card.Title>{Service?.price}</Card.Title>
                            <Card.Text>
                                {Service?.description}
                            </Card.Text>
                            <button href={Service?.link}>Details</button>
                        </Card.Body>
                    </Card>
                    </>)
                }
                </div>
                
      </div>
    );
};

export default Services;