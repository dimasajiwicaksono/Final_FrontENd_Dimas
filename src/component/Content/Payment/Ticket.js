import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import Moment from 'react-moment';
import axios from 'axios';



class Ticket extends Component {

    constructor() {
        super();
        this.state = {
            color: 'danger',
            status: 'confirmed'
        }
    }

    handleClick = () => {
        const { status, color } = this.state;
        const id = this.props.id;
        console.log(id)
        if (!status || !color) {
            this.setState({
                err: true
            })
        } else {
            this.setState({
                err: false,
            });

            axios.put(`https://dumb-tickapp.herokuapp.com/api/v1/order/${id}`, {
                status: 'pending',
            }
            ).then(res => {
                const data = res.data
                console.log(data)
                window.location.href=('/myticket')
            })
        }
    }



    render() {
        console.log(this.props.counter.total)

        return (
            <div className="container" style={{ marginBottom: 50 }}>
                <Card className="ticket"
                    >
                    <Card.Body style={{ background: "#ff7315" }}>
                        <Card.Body
                            style={{
                                background: "white",
                                zIndex: 1,
                                margin: 10
                            }}>
                            <Row className="header"
                                style={{
                                    background: '#c9c9c9',
                                    margin: 0,
                                    padding: 0
                                }}>
                                <Col className='header' xs ={12} md={9}>
                                    <h4>{this.props.name}</h4>
                                    <h6>ID ORDER : MDGH{this.props.id}7HG</h6>
                                </Col>
                                <Col className='header' xs ={12} md={3}>
                                    <h4>Face: {this.props.price}</h4>
                                </Col>
                            </Row>
                            <Row className="footer">
                                <Col className='header' xs ={12} md={9}>
                                    <h1>{this.props.title}</h1>
                                    <h5><Moment format='D MMM YYYY'>{this.props.start_time}</Moment> - 18.00 WIB</h5>
                                    <h5>{this.props.address}</h5>
                                </Col>
                                <Col className='header' xs ={12} md={3}>
                                    <Card.Img src='https://id.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png'
                                        style={{ objectFit: 'cover' }} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card.Body>
                    <Card.Body className="summary">
                        <h2>Shop Summary</h2>
                        <hr />
                        <Row className='totalPrice'>
                            <Col xs ={12} md={9}>
                                <h4>Total Price ( {this.props.quantity} Tickets)  </h4>
                            </Col>
                            <Col xs ={12} md={3}>
                                <h4>Rp {this.props.totalPrice}</h4>
                            </Col>
                            <hr />
                        </Row>
                    </Card.Body>
                    <hr style={{ border: 'solid 1px' }} />
                    <Card.Body className="paymentSign">
                        <h3>Prove of Payment</h3>
                        <Row className='imagePic' style={{justifyContent:'center'}}>
                            <Col xs ={12} md={6}>
                                <Col xs ={12} md={4}>
                                    {/* <Card.Img src="https://1.bp.blogspot.com/-hyzxX07ciWk/XPaURkosaeI/AAAAAAAABRM/AaCDgJWE8pM-f97Xp9fldguUsjcQ0aGJACLcBGAs/s640/hadits21info-invoice%25231797799.jpg"
                                        style={{ objectFit: 'cover' }} /> */}
                                        <Button style={{justifyContent:'center', marginLeft:25, marginBottom:10}}>Add Your Payment</Button>
                                    <br />
                                </Col>
                            </Col>
                            <Col xs ={12} md={6}>
                                <Button variant={this.props.status === 'pending' ? 'success': 'danger'}
                                    style={{ fontSize: '2em', marginLeft:50}}
                                    onClick={this.handleClick}>
                                    {this.props.status } 
                                </Button>
                            </Col>
                            <hr />
                        </Row>
                    </Card.Body>

                </Card>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}


export default connect(mapStateToProps)(Ticket)