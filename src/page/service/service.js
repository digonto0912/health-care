import "../home page/home.css";
import {useParams} from "react-router";
import {Link} from "react-router-dom" ;
import {Card} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const Service = () => {
    const {id} = useParams();

    const [freeCardsData, setfreeCardsData] = useState();

    useEffect(()=>{
        fetch("/freeServices.json")
        .then(res => res.json())
        .then(data => {
            setfreeCardsData(data)
        })
    },[]);

    const cardObject = freeCardsData?.[id];


    return (
        <div>
            <h2>hate ki ? magir hut , hate ki? hate oice madarcod</h2>
            <h2>id : {id}</h2>

            <div className="justify-content-center align-items-center m-auto">

            <Card  className=" cardsStyle colstyle mb-5">
                        <Card.Img variant="top" src={cardObject?.img} className="imgSize" />
                        <Card.Body>
                            <Card.Title>{cardObject?.title}</Card.Title>
                            <Card.Title>{cardObject?.price}</Card.Title>
                            <Card.Text>
                                {cardObject?.description}
                            </Card.Text>
                        </Card.Body>
            </Card>

            <br />

            <Link to="/">
            <button className="d-grid m-auto">Go Back</button>
            </Link>
            </div>
        </div>
    );
};

export default Service;