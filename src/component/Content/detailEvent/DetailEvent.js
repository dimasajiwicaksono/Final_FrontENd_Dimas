import React, { Component } from 'react';
import Header from '../../Nav/Header';
import Footer from '../../Nav/Footer';
import DetailEventCard from '../detailEvent/DetailEventCard';
import DetailEventContainer from '../detailEvent/DetailEventContainter';

import { connect } from 'react-redux';
import { eventsById } from '../../../_actions/events'


class DetailEvent extends Component {

componentDidMount() {
    const eventId = this.props.match.params.id
    this.props.dispatch(eventsById(eventId))
}

    render() {
        const eventId = this.props.eventsById
        console.log(eventId)
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <DetailEventCard />
                    <DetailEventContainer />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        eventsById : state.events,
    }
}

export default connect (mapStateToProps) (DetailEvent);