import React, { Component } from 'react';
import { Container, Button, Image, Row, Col } from 'react-bootstrap';
import Header from '../../Nav/Header';
import Favourite from './Favourite';

export default class Profile extends Component {
    render() {
        return(
            <div>
                <div className="header">
                    <Header />
                </div>
                <Container>
                    <div className="row" style={{ marginTop: "50px", marginBottom: "40px" }}>
                        <div className="col-8">
                            <h1>Profile</h1>
                            <h2 className="col-8">DIMAS AJI WICAKSONO</h2>
                            <div className="info"> <br />
                                <span>
                                    <h4>30-03-1997</h4><br />
                                    <h4>0899748833</h4><br />
                                    <h4>iniemail@gmail.com</h4>
                                </span>
                            </div>
                        </div>
                        <div className="col-2">
                            <Button className="import" variant="outline-dark" style={{ marginRight: "10px" }}>Edit Profile</Button>
                        </div>
                        <div className="col-2">
                            <span><Image src="https://miro.medium.com/fit/c/64/64/1*2bn998LOe7kbY41r0M5Row.jpeg" style={{ width: "100%", height: "100%" }} roundedCircle /></span>
                        </div>
                    </div>
                </Container>
                <Container>
                < div className="Favourite">
                    <h1>Favourite</h1>
                    <Row className="Favaourite">
                        <Col>
                            <Favourite />
                        </Col>
                        <Col>
                            <Favourite />
                        </Col>
                    </Row>
                </div>
                </Container>
            </div>
            
        )
    }
}