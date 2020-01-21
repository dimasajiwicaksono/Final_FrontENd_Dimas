import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Row, Col, Container } from 'react-bootstrap';
import Header from '../../Nav/Header';
import MyTicketList from './MyTicketList';

import { orderApproved} from '../../../_actions/orders'



class MyTicket extends Component {


    componentDidMount() {

        const Id = localStorage.getItem("id")
        this.props.getOrderApproved(Id)
    }

    render() {

        const { data, fetching } = this.props.orderApproved
        console.log(data)
        
        return (

            <div>
                <div className="header">
                    <Header />
                </div>
                <br /><br></br>
                
                <Container>
                    <div className="myTicket">
                        <div>
                            <h1 style={
                                {color: '#ff4d4d', 
                                fontSize: 70 }}>My Tickets</h1>
                        </div>
                        <hr style={
                            { border: 'solid 1px', 
                            color: '#ff4d4d' }} />
                        <div className="container">
                            <Row className="myTicket">
                                <Col>
                                {data.value===true ? 
                                data.data.map(item => 
                                        <MyTicketList
                                            id = {item.id}
                                            title={item.event.title}
                                            description = {item.event.description}
                                            price={item.event.price}
                                            address={item.event.address}
                                            status={item.status}
                                            /> 
                                    )
                                    :
                                    ( <h1>Cek</h1>)
                                }
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        orderApproved: state.order
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOrderApproved: (Id) => dispatch(orderApproved(Id))
    }
}


export default connect(mapStateToProps
    , mapDispatchToProps
    )(MyTicket)
