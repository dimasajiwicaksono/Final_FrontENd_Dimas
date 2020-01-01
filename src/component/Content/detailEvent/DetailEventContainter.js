import React, { Component } from 'react';
import { Container, Row, Col, Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';


import { eventsById } from '../../../_actions/events';


class DetailEventContainter extends Component {

    componentDidMount(){

        this.props.dispatch(eventsById())
    }

    render() {
        const { data } = this.props.eventsById
        console.log(data)
        return (
            <Container style={{marginTop:50}} >
                <div >
                    <Row>
                        <Col md={6} xs ={6}>
                            <h3 style={{textAlign:'center'}}>Event Description</h3><br />
                            <p1 className='title'>
                                {data.title}</p1><br/><br />
                            <p2 className='content' >
                                {data.description}
                            </p2>
                        </Col>
                        <Col md={6} xs ={6}>
                            <h3 style={{textAlign:'center'}}>Location</h3><br/>
                            <Row className="icon">
                                <Col md={1}>
                                    <FontAwesomeIcon icon = {faMapMarkerAlt} style={{height:25, width:25}}/>
                                </Col>
                                <Col md={10}>
                                <p1> {data.address}</p1><br /><br/>
                                </Col>
                            </Row>
                            <div className="text-align-center">
                            <Card>
                                <Card.Img src = {data.urlMaps}
                                    style ={{alt:"map", objectFit:'cover'}}/><br />
                            </Card>
                            </div>
                            <h5 style={{textAlign:'center'}}>Shared Event</h5><br/>
                            <div className='text-align-center'>
                                <Button variant='info'
                                        style={{marginRight:10}}>Twitter</Button>
                                <Button variant='primary'
                                        style={{marginRight:10}}>Facebook</Button>
                                <Button variant='secondary'>Copy Link</Button>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        eventsById : state.events
    }
}


export default connect (mapStateToProps)(DetailEventContainter);