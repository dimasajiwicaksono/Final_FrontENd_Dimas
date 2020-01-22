import React, { Component } from 'react';
import { Container, Row, Col, Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import {FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
FacebookIcon, TwitterIcon, WhatsappIcon} from 'react-share'

import { eventsById } from '../../../_actions/events';


class DetailEventContainter extends Component {

    componentDidMount(){
       
        this.props.dispatch(eventsById())
    }

    render() {
        const { data } = this.props.eventsById
        console.log(data.title)
        const shareUrl =`https://e-ventick.netlify.com/event/${data.id}`
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
                            <div className="cardMap" style={styles.cardMap}>
                            {/* <Card > */}
                                {/* <Card.Img src = {data.urlMaps} */}
                                    <iframe src="https://www.google.com/maps/d/embed?mid=13PmuA2jryS1-HpNVMIM4TCkfl-Y" style={styles.card}>Istora Bung Karno</iframe>
                            {/* </Card> */}
                            </div>
                            <h5 style={{textAlign:'center'}}>Shared Event</h5><br/>
                            <div className='text-align-center'>
                                <FacebookShareButton openShareDialogOnClick ={true} url={shareUrl} style={styles.btn}>
                                    <FacebookIcon size={32} round={true} style={styles.icon}/>
                                </FacebookShareButton>
                                <TwitterShareButton openDialogOnClick={true} url ={shareUrl}>
                                    <TwitterIcon size={32} round={true} style={styles.icon}/>
                                </TwitterShareButton>
                                <WhatsappShareButton openShareDialogOnClick ={true} url ={shareUrl}>
                                    <WhatsappIcon size={32} round={true} style={styles.icon}/>
                                </WhatsappShareButton>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}

const styles = {
    icon : {
        marginRight: 10,
        marginLeft:10,
        marginBottom: 20,
       
    },
    card : {
        width:'100%',
        height:'150%'
    },
    btn : {
        outline: 'none',
        border:'none'
    }

}

const mapStateToProps = (state) => {
    return {
        eventsById : state.events
    }
}


export default connect (mapStateToProps)(DetailEventContainter);