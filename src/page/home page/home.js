import "./home.css";
import React, { useEffect, useState } from 'react';
import bannerImg from "../images/2.png";
import { Row, Col, Card } from 'react-bootstrap';

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

console.log(paidcards)

    return (
        <div>

            <p className="note">ভাইয়া এখানে যে ছবি গুলো ব্যবহার করা হয়েছে , তা " থিম-ফরেস্ট " থেকে নেওয়া হয়েছে. ( তো ভাইয়া ছবি গুলো অন্য কারো সাথে মিলার ভয় থাকে, তার জন্য এটা দেওয়া )</p>

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
                <img src={bannerImg} />
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div>
                <h1 className="text-center">All Services</h1>

                <br />
                <br />

                <h1>Free Services</h1>

                <br />
                
                {
                freecards.map(freecard => <Row xs={1} md={2} className="g-4">
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={freecard?.img} />
                        <Card.Body>
                            <Card.Title>{freecard?.title}</Card.Title>
                            <Card.Title>{freecard?.price}</Card.Title>
                            <Card.Text>
                                {freecard?.discription}
                            </Card.Text>
                            <button href={freecard?.link}>Go</button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>)
                }

                <br />

                <h1>Paid Services</h1>

                <br />

                {
                    paidcards.map(paidcard => <Row xs={1} md={2} className="g-4">
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={paidcard?.img} />
                        <Card.Body>
                            <Card.Title>{paidcard?.title}</Card.Title>
                            <Card.Title>{paidcard?.price}</Card.Title>
                            <Card.Text>
                                {paidcard?.discription}
                            </Card.Text>
                            <button href={paidcard?.link}>Go</button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>)
                }
                

            </div>

        </div>
    );
};

export default Home;