import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { CardBody } from 'react-bootstrap/Card';

export default class Today extends Component {
    render() {
        return (
            <div className="container">
            <Row>
                <Card>
                    <Card.Img src='https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg'/>
                    <Card.Body>
                        <Row>
                            <Col>Festival Olahraga</Col>
                            <Col>12 Dec 2019</Col>
                            <Col> Lorem ipsum kjadkjkjadkjkjadkjadkjkjadkj</Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
            </div>
        )
    }
}
