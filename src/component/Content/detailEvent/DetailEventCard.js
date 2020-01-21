import React, { Component } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import axios from 'axios';

import { eventsById } from '../../../_actions/events'
import { counterIncreament, counterDecreament } from '../../../_actions/counter';


class DetailEventCard extends Component {


    handleClick = () => {
        const events = this.props.eventsById.data
        const id = events.id
        const ticketPrice = events.price
        let quantity = this.props.counter.num
        let total = quantity * ticketPrice

        let dataPayment = {
            event_id: id,
            user_id: localStorage.getItem('id'),
            quantity: quantity,
            totalPrice: total,
            status: "confirmed"
        }
        console.log(dataPayment)
        console.log(events)
        console.log(ticketPrice)
        console.log(quantity)
        console.log(total)
        console.log(dataPayment.user_id)


        axios.post('https://dumb-tickapp.herokuapp.com/api/v1/order',
            dataPayment ).then(res => {
                const data = res.data;
                console.log(data)
                window.location.href = (`/payment`);
            })
    }

    componentDidMount() {

        this.props.dispatch(eventsById())

    }

    render() {
        const { data } = this.props.eventsById
        console.log(data)
        console.log(this.props.counter.num)

        // variable to call nested object JS
        const categoryName = ((data || {}).category || {});
        const userName = ((data || {}).createdBy || {});
        const email = ((data || {}).createdBy || {});
        const phone = ((data || {}).createdBy || {});

        return (
            <Container style={{ marginTop: 50 }}>
                <Card>
                    <Card.Img
                        variant='top'
                        src={data.img} 
                        style={{maxHeight:'50vh', objectFit:'cover'}}
                        />
                    <Card.Body>
                        <Row>
                            <Col md={8}>
                                <Card.Text>
                                    <h1>{data.title}</h1>
                                    <h5>{categoryName.name}</h5>
                                </Card.Text>
                            </Col>
                            {localStorage.getItem('token') ? (
                            <Col md={4}>
                                <h1 style={{ fontSize: '2em', color: 'red' }}>Rp {this.props.counter.total}</h1>
                                <span>
                                    <div className='button-group'>
                                        <Button onClick={this.props.counter.num <= 1 ? null : () => this.props.dispatch(counterDecreament())}
                                            variant='light'
                                            style={{
                                                marginRight: 10,
                                                fontSize: 30,
                                                color: 'red',
                                            }}
                                        >-</Button>
                                        <p1 style={{ fontSize: 30 }}>{this.props.counter.num}</p1>
                                        <Button onClick={() => this.props.dispatch(counterIncreament())}
                                            variant='light'
                                            style={{
                                                marginRight: 10,
                                                marginLeft: 10,
                                                fontSize: 30,
                                                color: 'red',
                                            }}>+</Button>
                                        <Button className='justify-content-end'
                                            style={{ fontSize: 30 }}
                                            variant='danger'
                                            onClick={this.handleClick}
                                        > Buy</Button>
                                    </div>
                                </span>
                            </Col>) : (
                                <h5 style={{color:'red'}}> Maaf, Mohon untuk Login dahulu</h5>
                            ) }
                        </Row>
                        <hr />
                        <Row>
                            <Col md={4} xs={4}>
                                <h6>Hosted By</h6>
                                <br />
                                <h6>Jony Deep Corp.</h6></Col>
                            <Col md={4} xs={4}>
                                <h6>Date & Time</h6>
                                <br />
                                <FontAwesomeIcon icon={faCalendarAlt}
                                    style={{ height: 25, width: 25 }} />
                                <p1><Moment format="D MMM YYYY">{data.start_time}</Moment> -<Moment format="D MMM YYYY">{data.end_time}</Moment></p1> <br />
                                <FontAwesomeIcon icon={faClock}
                                    style={{ height: 25, width: 25 }} />
                                <p2>18.00 - 22.00 WIB</p2>
                            </Col>
                            <Col md={4} xs={4} >
                                <h6>Contact Person</h6>
                                <br />
                                <p1>{userName.name}</p1> <br />
                                <p2>{phone.phone}</p2><br />
                                <p3>{email.email}</p3>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>

            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        eventsById: state.events
    }
}



export default connect(mapStateToProps)(DetailEventCard)