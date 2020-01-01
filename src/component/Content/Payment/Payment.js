import React, { Component } from 'react';
import ShopSummary from '../Payment/ShopSummary';
import Ticket from '../Payment/Ticket';
import Header from '../../Nav/Header';
import Footer from '../../Nav/Footer';
import { Container } from 'react-bootstrap';

export default class Payment extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Header /><br/><br/>
                </div>
                <Container>
                    <div>
                        <h1 style={{color:'#ff4d4d'}}>Payment</h1>
                    </div>
                    <hr style={{border:'solid 2px', color:'#ff4d4d'}}/>
                    <Ticket />  
                    <Ticket />  
                    <Ticket />  
                </Container>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        )
    }
}
