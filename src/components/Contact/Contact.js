import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';


const Contact = () => {
    return (
        <div>
            <Container>
                <h4 className="fw-bold fst-italic text-primary fs-2 my-2 py-3 text-uppercase text-lg-start text-decoration-underline">Contact Us</h4>
  <Row className="py-3">
                    <Col sm={4}>
                        <img className="img-fluid rounded-3 py-3" src="https://i.pinimg.com/originals/a0/d8/77/a0d87759567c9be76ccad09c236c69b8.jpg" alt="" />
                    </Col>
                    <Col sm={8}>
                        <p className="fw-bold fst-italic fs-1 ">GET IN TOUCH</p>
                        <div className="w-75 mx-auto d-block">
                        <Form>
                        <Form.Group className="mb-3 py-2" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="your full name*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="comments/question*" rows={5} />
                                </Form.Group>
                                <Button variant="primary">Send Now</Button>
                        </Form>
                    </div>
                    </Col>
  </Row>
  
</Container>
        </div>
    );
};

export default Contact;