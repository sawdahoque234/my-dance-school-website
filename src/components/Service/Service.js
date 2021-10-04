import React, { useEffect, useState } from 'react';
import Dance from '../Dance/Dance';
import { Row, Button, Container, Col } from 'react-bootstrap';



const Service = () => {
    const [dance, setDance] = useState([])
    useEffect(() => {
        fetch('./dances.JSON')
            .then(res => res.json())
            .then(data => setDance(data));
         
    }, [])
    return (
        <div >
            <Container>

                <Row>
                    <h2 className="fw-bolder">Our Dance Classes</h2>
                    {
                            dance.map(dance => <Dance
                                key={dance.key}
                                dance={dance}
                            ></Dance>)
                        }
                    
            </Row>
        </Container>
        </div>
    );
        
};

export default Service;