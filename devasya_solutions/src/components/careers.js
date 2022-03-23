import React, { Component } from 'react';
import { Container, Form, Button, Col, Row} from 'react-bootstrap';


class Careers extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Container>
                    <h1>Careers</h1>
                    <p>We are hiring!</p>
                    <br />
                    <Form>                    
                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                                <Form.Control type="text" size="md" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                                <Form.Control type="text" size="md" placeholder="Last Name" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" size="md" placeholder="Email" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId="formBasicPhone">
                                <Form.Control type="phone" size="md" placeholder="Phone Number" />
                            </Form.Group>
                        </Row>
                        {/* <Row> */}
                            <Form.Group controlId="formFilemd" className="mb-3">
                                {/* <Form.Label>Large file input example</Form.Label> */}
                                <Form.Control type="file" size="md" />
                                <small style={{ textAlign :"left" }}>Please attach your resume in pdf format and size should be less than 2mb.</small>
                            </Form.Group>
                        {/* </Row> */}
                        
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control  as="textarea" size="md" type="text" style={{ height: '100px' }} placeholder="Message" />
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit" size="md" >
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
         );
    }
}
 
export default Careers;