import React, { Component } from 'react';
import { Card, Col, Row, Button} from 'react-bootstrap';
import { connect } from 'react-redux'


class Ticket extends Component {

    render() {

        console.log(this.props.counter.total)
        
        return (
            <div className="container" style={{marginBottom:50}}>
            {/* <hr /> */}
            <Card className="ticket"
                    style={{marginRight:50, marginLeft:50}} >
                <Card.Body style={{background:"#ff4d4d"}}>
                    <Card.Body style={{background:"white", zIndex:1, margin:20}}>
                        <Row className="header"
                            style={{background:'#c9c9c9', 
                                    margin:0, 
                                    padding:0}}>
                            <Col className='header' md={9}>
                                <h4>Is Bos</h4>
                                <h6>ID User : 9813INA</h6>
                            </Col>
                            <Col className='header' md={3}>
                                <h4>Face: 300.000</h4>
                            </Col>
                        </Row>
                        <Row className="footer">
                            <Col className='header' md={9}>
                                <h1>Raisa in Live Concert</h1>
                                <h5>13 Dec 2019 - 18.00 WIB</h5>
                                <h5>Jl KH AKhmad Dahlan C.45, Gerbang Utama
                                    Stadion Gelora Bung Karno</h5>
                            </Col>
                            <Col className='header' md={3}>
                                <Card.Img src='https://id.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png'
                                        style={{objectFit:'cover'}}/>
                            </Col>
                        </Row> 
                    </Card.Body>
                </Card.Body>
                
                <Card.Body className="summary">
                    <h2>Shop Summary</h2>
                    <hr />
                    <Row className='totalPrice'>
                        <Col md={10}> 
                        <h4>Total Price (2 Tickets) </h4>
                        </Col>
                        <Col md={2}> 
                        <h4>899348</h4>
                        </Col>
                        <hr/>
                    </Row>
                </Card.Body>
                <hr style={{border:'solid 1px'}}/>
                <Card.Body className="paymentSign">
                    <h3>Prove of Payment</h3>
                    
                    <Row className='imagePic'>
                        <Col md={10}>
                            <Col md={4}>
                            
                                <Card.Img src ="https://1.bp.blogspot.com/-hyzxX07ciWk/XPaURkosaeI/AAAAAAAABRM/AaCDgJWE8pM-f97Xp9fldguUsjcQ0aGJACLcBGAs/s640/hadits21info-invoice%25231797799.jpg" 
                                    style={{objectFit:'cover'}} />
                                    <br />
                            </Col>
                        </Col>
                        <Col md={2}> 
                            <Button variant='danger'
                                    style={{fontSize:'2em'}}
                                    onClick={ e =>
                                        window.confirm("Aree You Sure?")}>Confirm</Button>
                        </Col>
                        <hr/>
                    </Row>
                </Card.Body>
            
            </Card>
        </div>
        )
    }
}


const mapStateToProps =(state) => {
    return {
        counter:state.counter
    }
}


export default connect (mapStateToProps)(Ticket)