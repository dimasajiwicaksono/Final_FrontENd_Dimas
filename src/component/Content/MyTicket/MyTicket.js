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
                <br /><br></br>
                <Container>
                    <div className="myTicket">
                        <div>
                            <h1 style={{color:'#ff4d4d', fontSize:70}}>My Tickets</h1>
                        </div>
                        <hr style={{border:'solid 1px', color:'#ff4d4d'}}/>
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
