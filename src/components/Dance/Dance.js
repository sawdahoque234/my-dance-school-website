import React from 'react';
import { Card, CardGroup, Button, Container, Row,Col } from 'react-bootstrap';
import './Dance.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Dance = (props) => {
    const {name, img,des, key,fee,courses}=props.dance

    return (
        <div className=" a col-3 py-3 px-2 mb-3 mx-auto d-block rounded-3   ">
                    <Card>
            <CardGroup class="p">
            <img id="a" src={img} className="w-100"alt="" />
                    <Card.Title className=" py-2">{name}</Card.Title>
                    <Card.Subtitle className="text-danger fw-bold py-2">Fee:$ {fee}</Card.Subtitle>
                    <Card.Subtitle className="text-success fw-bold py-2 ">Courses:{courses}</Card.Subtitle>
                    <Card.Text>{des.slice(0, 200)}</Card.Text>
                    <Button variant="success" className=""><FontAwesomeIcon icon={faShoppingCart} className="mx-2" />Buy Now</Button>
                
                </CardGroup>
            </Card>
            
        </div>

        // *****
       
        
    );
};

export default Dance;