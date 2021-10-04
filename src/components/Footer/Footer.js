import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faMobile,faPhone,faStar} from '@fortawesome/free-solid-svg-icons'




const Footer = () => {
    return (
        <div>
            <Container>
                {/* footer */}
                <Row className="bg-success mt-3 rounded-3 text-white 
             p-3">
                        <Col sm className="fw-bolder fst-italic  fs-3">DANCE STUDIO
                        <br />
                        <small className="fw-lighter fs-6 fst-italic">This is the world best Dance Studio.</small>
                        
                        </Col>
                        <Col sm className="fw-bold fs-6">
                        OUR HOURS <br />
                        MON-FRI 09:00 – 19:00 <br />
                        SAT-SUN 10:00 – 14:00</Col>
                        <Col sm className="fw-bold fs-6">LOCATION <br/>
                                887 Myrtle Dr.<br/>
                                Bronx, NY 16544</Col>
                        <Col sm className="fw-bold fs-6">CONTACT INFO <br />
                        <FontAwesomeIcon  icon={faPhone} className="mx-2" />
                                    : + 1 800 755 60 <br />
                        <FontAwesomeIcon icon={faEnvelope } className="mx-2"/>
                        Email:dsemail@email.com</Col>
                    
            </Row>
</Container>
        </div>
    );
};

export default Footer;