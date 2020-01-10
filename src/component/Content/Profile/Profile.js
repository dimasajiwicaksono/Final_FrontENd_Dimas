import React, { Component } from 'react';
import { Container, Button, Image, Row, Col } from 'react-bootstrap';
import {connect } from 'react-redux'

import Header from '../../Nav/Header';
import Favourite from './Favourite';

import { profile } from '../../../_actions/profile';


class Profile extends Component {

    componentDidMount() {

        const userId =localStorage.getItem("id")
        this.props.getUser(userId)
    }

    render() {

        const { data, fetching, error } = this.props.profile
        console.log(data)

        return(
            <div>
                <div className="header">
                    <Header />
                </div>
                <Container>
                    <div className="row" style={{ marginTop: "50px", marginBottom: "40px" }}>
                        <div className="col-6">
                            <h1>Profile</h1>
                            <h2 className="col-6">{data.name}</h2>
                            <div className="info"> <br />
                                <span>
                                    <h4 style={{paddingLeft:0}}>{data.phone}</h4><br />
                                    <h4>{data.email}</h4>
                                </span>
                            </div>
                        </div>
                        <div className="col-2">
                            <Button className="import" variant="outline-dark" style={{ marginRight: "10px" }}>Edit Profile</Button>
                        </div>
                        <div className="col-4">
                            <span><Image src={data.img} style={{ width: 200, height: 200 }} roundedCircle /></span>
                        </div>
                    </div>
                </Container>
                <Container>
                < div className="Favourite">
                    <h1>Favourite</h1>
                    <Row className="Favaourite">
                        <Col>
                            <Favourite />
                        </Col>
                        <Col>
                            <Favourite />
                        </Col>
                    </Row>
                </div>
                </Container>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile : state.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (userId) => dispatch(profile(userId))
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Profile)