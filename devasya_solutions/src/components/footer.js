import React, { Component } from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <br/>
                <Navbar collapseOnSelect fixed='bottom' expand='sm' bg='secondary' variant='dark'>
                    <Container>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav class="navbar-nav nav-fill w-100">
                                <p>Devasya Solutions Pvt. Ltd.</p>
                                <Nav.Item>
                                    
                                    <Nav.Link href='/'>Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href='/services'>Services</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href='/contact'>Contact</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href='/signin'>SignIn</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <br/>
                <br/>
            </div>
           
            
         );
    }
}
 
export default Footer;