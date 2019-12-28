import React, { Component } from 'react';
import { Container, Row, Col, FormControl } from 'react-bootstrap';
import Header from '../Nav/Header';
import NavCategory from '../Nav/NavCategory';
import Today from './Content/Today';


export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="header" fix="top">
                    <Header />
                </div>
                <Container>
                <div>
                    <h1> ini untuk search</h1>
                </div>

                <NavCategory />
                <div className="todayContent">
                    <h1>Today</h1>
                    <Row className="todayContent">
                        <Col>
                            <Today />
                        </Col>
                        <Col>
                            <Today />
                        </Col>
                    </Row>
                </div>
                <div className="upcomingContent">
                    <h1>Upcoming</h1>
                    <Row className="upcomingContent">
                        <Col>
                            <Today />
                        </Col>
                        <Col>
                            <Today />
                        </Col>
                    </Row>
                </div>
                </Container>
            </div>
        )
    }
}
