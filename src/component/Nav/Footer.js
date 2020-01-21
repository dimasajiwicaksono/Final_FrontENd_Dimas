import React, { Component } from 'react';
import { Nav, Navbar, Col, Row } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (

            <div className=' justify-content-between' style={{backgroundColor:'#232020'}}sticky='bottom'>
                <Row style={{ margin: 50 }}>
                    <Row style={{ margin: 20 }}>
                        <Col md={6}>
                            <Navbar.Brand className='light'
                                style={{ fontSize: '2em', color: 'white' }}
                                href='/Home'>
                                e-Ventick
                        </Navbar.Brand>
                            <Col style={{ padding: 0 }}>
                                <h6 style={{ color: 'white' }}>
                                    e-Ventick is the powerful
                                    e-ticketing platform
                                    serve your experience with
                                    Sport, Tech, Art, Music
                                </h6>
                            </Col>
                        </Col>
                        <Col md={3} style={{ color: 'white' }}>
                            <h5>Link</h5>
                            <h6>About Us</h6>
                            <h5>Follow Us</h5>
                            <h6>Instagram</h6>
                            <h6>Twitter</h6>
                        </Col>
                        <Col md={3} style={{ color: 'white' }}>
                            <h5>Have a Questions ?</h5>
                            <p1>eventick@support.com</p1>
                        </Col>
                    </Row>
                    <Nav className="justify-content-end ">
                    </Nav>
                </Row>
            </div>
        )
    }
}
