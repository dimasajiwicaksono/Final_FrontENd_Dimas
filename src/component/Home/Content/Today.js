import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { eventsById } from '../../../_actions/events';


class Today extends Component {

    componentDidMount() {

        const eventId = this.props.match
        console.log(eventId)
        this.props.getEvents(eventId)
        
    }



    render() {
        const data = this.props
        console.log(data)
        return (
            // <Container style={{marginBottom:30}}>
            <Col md={6}>
                <Card>
                    {/* // <Container> */}
                    <Card.Body>
                        <Card.Img src={this.props.img}
                            style={{ objectFit: 'cover', maxHeight: 200 }}
                        />
                        <Card.ImgOverlay >
                            <Button className="bg-danger"
                                style={{
                                    border: 'none',
                                    opacity: '0.8',
                                    fontSize: '1.5em'
                                }}
                            >Rp {this.props.price}</Button>
                        </Card.ImgOverlay>
                        <div>
                            <Row>
                                <Col md={10} xs={12}>
                                
                                    <Link to={`/event/${data.id}`} style={{ textDecoration: 'none', color: 'black' }}><h3>{this.props.title} ...</h3></Link>
                                    <h3 style={{ color: '#dd3636' }}>{this.props.category}</h3> <br />
                                    <h6>{this.props.description}</h6><br />
                                    <h5><Moment format="D MMM YYYY">{this.props.start}</Moment></h5>
                                </Col>
                                <Col md={1} xs={12}>
                                    <FontAwesomeIcon icon= {faHeart} 
                                        style={{marginTop:20, height:30, width:30}}/>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            // {/* // </Container> */ }
            // </Container>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        eventsById: state.eventsById
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: (eventId) => dispatch(eventsById(eventId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Today)