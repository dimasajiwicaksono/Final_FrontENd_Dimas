import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import Ticket from '../Payment/Ticket';
import Header from '../../Nav/Header';
import Footer from '../../Nav/Footer';

import { orderPending } from '../../../_actions/orders';


class Payment extends Component {

    componentDidMount() {
        const userId = localStorage.getItem('id')
        this.props.getOrderPending(userId)
        console.log(userId)
    }

    render() {
        const {data, fetching}  = this.props.orderPending
        console.log(data)
        const name = localStorage.getItem('name')
        const id = localStorage.getItem('id')
        
        console.log(name)
        console.log(id)

        return (
            <div>
                <div className="header">
                    <Header /><br /><br />
                </div>
                <Container>
                    <div>
                        <h1 style={{ color: '#ff4d4d' }}>Payment</h1>
                    </div>
                    <hr style={{ border: 'solid 2px', color: '#ff4d4d' }} />
                    {data.value===true ? 
                        data.data.map(item =>
                        
                        <Ticket
                            id={item.id}
                            name={name}
                            title={item.event.title}
                            address={item.event.address}
                            start_time={item.event.startTime}
                            price={item.event.price}
                            quantity={item.quantity}
                            totalPrice={item.totalPrice}
                            status={item.status} 
                            />
                    )
                    :
                        null
                    
                    }

                </Container>

                <div className="header">
                    <Footer />
                </div>
    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orderPending: state.order
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOrderPending: (userId) => dispatch(orderPending(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
