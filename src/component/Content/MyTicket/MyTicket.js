import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Header from '../../Nav/Header';
import MyTicketList from './MyTicketList';


export default class MyTicket extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Header />
                </div>
                <Container>
                    <div className="myTicket">
                        <h1>My Ticket</h1> <br />
                        <div className="container">
                            <Row className="myTicket">
                                <Col>
                                    <MyTicketList />
                                    <MyTicketList />
                                    <MyTicketList />
                                    <MyTicketList />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
