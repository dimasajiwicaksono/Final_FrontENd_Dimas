import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Moment from 'react-moment';


import { eventsById } from '../../../_actions/events';


class CategoryContent extends Component {

    componentDidMount() {

        this.props.getEvents()
    }

    render() {

        console.log(this.props)

        return (


            <Col md={6}>
                <Card>
                    <Card.Body>
                        <Card.Img src={this.props.img}
                            style={{ objectFit: 'cover', maxHeight: 200 }} />
                        <div>
                            <Row>
                                <Col >
                                    <Link to={`/event/${this.props.id}`} style={{ textDecoration: 'none', color: 'black' }}><h3>{this.props.title}</h3></Link>
                                </Col>
                                <Col>
                                    <p1><Moment format="D MMM YYYY">{this.props.start_time}</Moment></p1><br />
                                    <p1>{this.props.description}</p1>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        eventsById: state.events
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: () => dispatch(eventsById())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContent)
