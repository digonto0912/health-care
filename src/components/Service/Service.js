import "../Home/Home.css";
import { Button } from 'react-bootstrap';
import {useParams} from "react-router";
import {Link} from "react-router-dom" ;
import {Card} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const Service = () => {
    const {id} = useParams()
    console.log(id);
    const [AllService,setAllService] = useState([]);
    useEffect(()=>{
        fetch('/AllServices.json')
        .then(res =>res.json())
        .then(data =>{
            // console.log(data);
            setAllService(data)
        })
    },[]);
    
            console.log(AllService);
    const matchedItem = AllService[id];
    console.log(matchedItem);
    return (
                <div className="mt-5 mb-5">
                    <div className="justify-content-center align-items-center m-auto">
        
                    {
        
                        <Card  className="cardsStyle colstyle mb-5">
                                <Card.Img variant="top" src={matchedItem?.img} className="imgSize" />
                                <Card.Body>
                                    <Card.Title>{matchedItem?.title}</Card.Title>
                                    <Card.Title>{matchedItem?.price}</Card.Title>
                                    <Card.Text>
                                        {matchedItem?.description}
                                    </Card.Text>
                                </Card.Body>
                    </Card>
                    }
        
                    <br />
        
                    <Link to="/">
                    <Button variant="primary" className="d-grid m-auto">Go Back</Button>
                    </Link>
                    </div>
                </div>
            );
};

export default Service;