import React from 'react';
import { Button, Row, Col, Container, Card,CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faMessages, faEnvelope } from '@fortawesome/free-solid-svg-icons'



const About = () => {
    return (
        <div>
            {/* **************************storypart************ */}
            <Container>
            <Row className=" row">
                <Col className="col-4  py-2">
                    <h1 className="fw-bolder fst-italic py-2">Our Story</h1>
                    <small className="fs-6">Our Stuido is very famouse .It is one of the fabulous academy which give the new generation an updated field to expose <br />their talent in western category. It not only give opportunity to this generation but also helped the motherhood of this generation to show their talents in dance which have some <br />where lost in their daily lifes. Hope this academy grow more and thank you for providing us.</small> <br /> <br />
                    <Button className="m-3 px-3" variant="secondary"><Link className="text-white text-decoration-none fst-italic" to="/contact">Contact Us</Link></Button>
                    
                </Col>
                <Col className="col-8 mt-3">
                    <div className="">
                        <img src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/138/2017/04/Bob-Boross-Web-1140x684.jpg" className="img-fluid h-50 w-100 rounded-3" alt="" />
                    </div>
                </Col>
            </Row>
            </Container>
            {/* **********end story****** */}
            
            <Container className="py-3">
            <Row >
                <Col xs={3} className="fs-2 mx-2 rounded-3 px-2 fw-bolder bg-dark text-white">
                        120<br />
                        TEACHERS 
                </Col>
                <Col xs={3} className="fs-2 mx-2 rounded-3 p-2 fw-bolder bg-dark text-white">
                        4520<br />
                        STUDENTS 
                </Col>
                <Col xs={5} className="fs-2 mx-2 fw-bolder bg-dark rounded-3 text-white">
                        22 <br />
                    YEARS OF EXPERIENCES
                </Col>
                    
            </Row>

            </Container>
            <Container className="py-3 my-2">
                <h1 className="fw-bolder fs-1 fst-italic text-danger">Our Teachers</h1>
                <Row className="py-3">
                    <Col xs={3}>
                    <Card>
                    <CardGroup class="p">
                        <img  src="https://i.insider.com/6008b7fbdb847c001918bf8e?width=800&format=jpeg&auto=webp" className="w-100 rounded-3 "alt="" />
                    <Card.Title className="text-primary fs-3 py-2 fw-bolder">Mr. Jhon</Card.Title>
                    <Card.Subtitle className="fw-bold py-2">Age:35</Card.Subtitle>
                    <Card.Subtitle className="fw-bolder py-2">Ballet Dancer</Card.Subtitle>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                <Button className="m-3 px-3" variant="secondary"><Link className="text-white text-decoration-none fst-italic" to="/contact">Contact <FontAwesomeIcon  icon={faEnvelope} className="mx-2" /></Link></Button>
                                
                
                </CardGroup>
                    </Card>
                    </Col>
                    <Col xs={3}>
                    <Card>
                    <CardGroup class="p">
                        <img  src="https://i.insider.com/5f1861a8aee6a811854d9e18?width=800&format=jpeg&auto=webp" className="w-100 rounded-3 "alt="" />
                    <Card.Title className="text-primary fs-3 py-2 fw-bolder">Mr. Tombut</Card.Title>
                    <Card.Subtitle className="fw-bold py-2">Age:32</Card.Subtitle>
                    <Card.Subtitle className="fw-bolder py-2">Modern Dancer</Card.Subtitle>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                <Button className="m-3 px-3" variant="secondary"><Link className="text-white text-decoration-none fst-italic" to="/contact">Contact <FontAwesomeIcon  icon={faEnvelope} className="mx-2" /></Link></Button>
                    
                
                </CardGroup>
                    </Card>
                    </Col>
                    <Col xs={3}>
                    <Card>
                    <CardGroup class="p">
                        <img  src="https://i.insider.com/5f833b6abab422001979aa96?width=800&format=jpeg&auto=webp" className="w-100 rounded-3 "alt="" />
                    <Card.Title className="text-primary fs-3 py-2 fw-bolder">Mrs. Jerry</Card.Title>
                    <Card.Subtitle className="fw-bold py-2">Age:30</Card.Subtitle>
                    <Card.Subtitle className="fw-bolder py-2">Hip Hop Dancer</Card.Subtitle>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <Button className="m-3 px-3" variant="secondary"><Link className="text-white text-decoration-none fst-italic" to="/contact">Contact <FontAwesomeIcon  icon={faEnvelope} className="mx-2" /> </Link></Button>

                
                </CardGroup>
                    </Card>
                    </Col>
                    <Col xs={3}>
                    <Card>
                    <CardGroup class="p">
                        <img  src="https://i.insider.com/5ca6151a16c9584d15032112?width=800&format=jpeg&auto=webp" className="w-100 rounded-3 "alt="" />
                    <Card.Title className="text-primary fs-3 py-2 fw-bolder">Mr. KimKard</Card.Title>
                    <Card.Subtitle className="fw-bold py-2">Age:40</Card.Subtitle>
                    <Card.Subtitle className="fw-bolder py-2">Jazz Dancer</Card.Subtitle>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <FontAwesomeIcon className="text-warning"icon={faStar }/>
                    <Button className="m-3 px-3" variant="secondary"><Link className="text-white text-decoration-none fst-italic" to="/contact">Contact <FontAwesomeIcon  icon={faEnvelope} className="mx-2" /></Link></Button>

                </CardGroup>
                    </Card>
                    </Col>
                </Row>
                <Button className="m-3 px-3" variant="danger ">Veiw All Teachers</Button>

            </Container>

        </div>
    );
};

export default About;