import React, { Component } from 'react';
import { Col, Row, Card } from 'react-bootstrap';

export default class MyTicketList extends Component {


    componentDidMount() {
        console.log(this.props.status)
    }
    

    render() {

        const name = localStorage.getItem('name')
        

        return (
            <div className='row-fluid'>
                <div className="container" style={{ marginBottom: 50 }}>
                    {/* <hr /> */}
                    <Card className="ticket"
                        style={{ marginRight: 50, marginLeft: 50 }} >
                        <Card.Body style={{ background: "#ff4d4d" }}>
                            <Card.Body style={{ background: "white", zIndex: 1, margin: 20 }}>
                                <Row className="header"
                                    style={{
                                        background: '#c9c9c9',
                                        margin: 0,
                                        padding: 0
                                    }}>
                                    <Col className='header' md={9}>
                                        <h4>{name}</h4>
                                        <h6>ID ORDER :MD{this.props.id}09CH</h6>
                                    </Col>
                                    <Col className='header' md={3}>
                                        <h4>Face:{this.props.price}</h4>
                                    </Col>
                                </Row>
                                <Row className="footer">
                                    <Col className='header' md={9}>
                                        <h1>{this.props.title}</h1>
                                        <h5>13 Dec 2019 - 18.00 WIB</h5>
                                        <h5>{this.props.address}</h5>
                                        <h5>{this.props.status}</h5>
                                    </Col>
                                    <Col className='header' md={3}>
                                        <Card.Img src='https://id.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png'
                                            style={{ objectFit: 'cover' }} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </div>
            </div>
                )
            }
        }
