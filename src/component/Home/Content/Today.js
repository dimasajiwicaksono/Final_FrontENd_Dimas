import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCalendarAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../Content/Today.css'

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
            <Col className='body' md={4}>
            <Card className="menu-item">
                <Card.Img className='img' src={this.props.img} style={styles.img}/>
                <Card.ImgOverlay style={styles.card}>
                    <Button className="btn-danger" style={styles.btn}>Rp {this.props.price}</Button>
                </Card.ImgOverlay>
                <Card.Body>
                <div className='content'>
                    <Row>
                        
                        <Col md={10} xs={10} >
                            <Link to={`/event/${data.id}`} style={styles.style}>
                                <h3 style={styles.text}>{this.props.title}...</h3>
                            </Link>
                        </Col>
                        <Col md={2} xs={2}>
                            <FontAwesomeIcon icon={faHeart}
                                    style={styles.icon} />
                        </Col>
                        <Col >
                                <h3 style={styles.category}>{this.props.category}</h3>
                                <h5 style={styles.text}><FontAwesomeIcon icon={faCalendarAlt}
                                    style={styles.icon} />  <Moment format="D MMM YYYY">{this.props.start}</Moment></h5>
                                <h5 style={styles.text}><FontAwesomeIcon icon={faClock}
                                    style={styles.icon} />  <Moment format="HH:mm">{this.props.start}</Moment></h5>
                                <h5 style={styles.text}><FontAwesomeIcon icon={faMapMarkerAlt}
                                    style={styles.icon} />  Gelora Bung Karno</h5>
                        </Col>
                    </Row>
                </div>
                </Card.Body>
            </Card>
            </Col>
        )
    }
}

const styles = {

    style :{
        textDecoration: 'none',
        color: 'black'
    },
    icon : { 
        height: 20, 
        width: 20 
    },
    text : {
        fontSize :'1em'
    },
    category :{
        color: '#dd3636',
        fontSize:'1em'
    },
    btn : {
        opacity:0.7,
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