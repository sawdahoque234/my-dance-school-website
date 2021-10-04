import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dance from '../Dance/Dance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'




const Home = () => {
    const [dance, setDance] = useState([])
    useEffect(() => {
        fetch('./dances.JSON')
            .then(res => res.json())
            .then(data => setDance(data));
         
    }, [])
    
    return (
        <div className="container row
            ">
            <Container>
            <Row>
                <Col xs={8} >
                    <div className="py-3">
                    <img src="https://www.wallpapertip.com/wmimgs/5-50410_hip-hop-dance-images-hd-download.jpg" className="w-75 border-2 rounded-3 mb-3" alt="" />
                    </div>
                </Col>
                <Col xs={4}>
                    <h1 className="text-primary fw-bolder text-lg-start mx-2 py-3">The Power Of Dance</h1>
                    <small className="  text-lg-start">Dance is not only a wonderful 
                        way to express yourself but also  a fantastic spare time activity!! Dancing is an art that refers to the movements of body parts and especially to rhythmic and to music. Dancing is taken as a form of nonverbal communication that is used to express emotions, ideas or tell a story. Dances are social, participatory or performed for an audienc.</small>
                    <br/>
                    <Button className="m-3 px-3" variant="secondary"><Link className="text-white text-decoration-none fst-italic" to="/contact">Contact Us</Link></Button>


                </Col>
            </Row>
            </Container>
            {/* **********************************2nd section******************* */}
            <Container>
            <Row>
                    <h1 className="py-2 fw-bold text-danger">Our Dance Classes</h1>
                        {
                            dance.slice(0,4).map(dance => <Dance 
                                key={dance.key}
                                dance={dance}
                            ></Dance>)
                }
            </Row>
            <Button className="m-3 px-3" variant="danger"><Link className="text-white text-decoration-none fst-italic" to="/service">View All Classes</Link></Button>
            </Container>
            {/* ***********************3rd section********************* */}
            <Container>
                <h1 className="fw-bolder py-3">TESTIMONIALS</h1>
                <small className="text-primary fw-bolder">What people say...</small>
        <CardGroup className="mb-2 py-3 mx-3">
        <Card>
    <Card.Img variant="top" src="https://i.insider.com/5f833b6abab422001979aa96?width=800&format=jpeg&auto=webp" />
    <Card.Body>
      <Card.Title>James Charles</Card.Title>
      <Card.Text>
      Absolutely incredible studio, honestly best show about dance ever created!! Re-watched this show every day of my life since grade 2! Incredible casting! Incredible soundtracks! 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Subtitle>Salsa dancer</Card.Subtitle>
                            
    <FontAwesomeIcon className="text-warning"icon={faStar }/>
    <FontAwesomeIcon className="text-warning"icon={faStar }/>
    <FontAwesomeIcon className="text-warning"icon={faStar }/>
    <FontAwesomeIcon className="text-warning"icon={faStar }/>
    <FontAwesomeIcon className="text-warning"icon={faStar }/>

    </Card.Footer>
    </Card>
                    {/* 2ndcard */}
  <Card>
    <Card.Img variant="top"  src="https://i.insider.com/5ca6083886291369fa2eacc2?width=800&format=jpeg&auto=webp" />
    <Card.Body>
      <Card.Title>Atta Halilintar</Card.Title>
      <Card.Text>
      This studio survived me when I was in a bad situation in my life. It give me inspiration, courage and an ability to start over. I am so thankful to the crew and recommend this show to everyone.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <Card.Subtitle>Hip Hop dancer</Card.Subtitle>
        <FontAwesomeIcon className="text-warning"icon={faStar }/>
         <FontAwesomeIcon className="text-warning"icon={faStar }/>
        <FontAwesomeIcon className="text-warning"icon={faStar }/>
        <FontAwesomeIcon className="text-warning"icon={faStar }/>
        </Card.Footer>
    </Card>

                    
                    
                            
                    {/* 3rdcard */}
  <Card>
    <Card.Img variant="top" src="https://i.insider.com/5ca61df5c6cc507874108c82?width=800&format=jpeg&auto=webp" />
    <Card.Body>
      <Card.Title>JackSepticEye</Card.Title>
      <Card.Text>
      I absolutely love dance academy, dancing is a huge part of my life and to be able to do it is amazing! Dance Academy is one of my all-time favourite shows.
      </Card.Text>
      <Card.Title>JackSepticEye</Card.Title>
    </Card.Body>
                    <Card.Footer>
                            <Card.Subtitle>Ballet dancer</Card.Subtitle>
                            <FontAwesomeIcon className="text-warning"icon={faStar }/>
                            <FontAwesomeIcon className="text-warning"icon={faStar }/>
                            <FontAwesomeIcon className="text-warning"icon={faStar }/>
                            <FontAwesomeIcon className="text-warning"icon={faStar }/>
                            <FontAwesomeIcon className="text-warning"icon={faStar }/>
                     </Card.Footer>
  </Card>
</CardGroup>

            </Container>
        </div>
           
                       
    );
};

export default Home;