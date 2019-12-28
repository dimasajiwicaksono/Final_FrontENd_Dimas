import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class MyTicketList extends Component {
    render() {
        return (
            <div className='row-fluid'>
                <Row md={12} className="fluid" style={{ marginBottom: 40 }}>
                    <Col md={8} >
                        <Col className='bg-warning' style={{border:'solid'}}>
                            <p1>DImas Aji</p1> <br/>
                            <p2>ID Nuber : GHJ872349HJ </p2> <hr />
                        </Col>
                        <h3>RAISA LIVE IN CONSERT</h3>
                        <p1>Rabu 23 November</p1><br />
                        <p2>Jln ciputat timur no 23, Tangerang selaatan</p2>
                    </Col>
                    <Col md={4} style={{ border: 'solid' }}>
                        ini Barcode
                    </Col>
                </Row>
            </div>
        )
    }
}
