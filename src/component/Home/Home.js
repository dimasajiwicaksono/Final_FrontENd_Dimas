import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import moment from 'moment';
import axios from 'axios'

import { connect } from 'react-redux';
import { getEventsToday } from '../../_actions/events'
import { getEventsTomorrow } from '../../_actions/events'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Header from '../Nav/Header';
import NavCategory from '../Nav/NavCategory';
import Footer from '../Nav/Footer';
import Today from '../Home/Content/Today';



class Home extends Component {

    constructor() {
        super();
        this.state = ({
            search: '',
            eventSearch: []
        })
    }

    componentDidMount() {

        const date = moment(new Date()).format("YYYY-MM-DD")
        var tomorrow = new Date()
        tomorrow.setDate(moment(tomorrow.getDate() + 1))
        const date2 = moment(tomorrow).format("YYYY-MM-DD")

        this.props.getEventsToday(date)
        this.props.getEventsTomorrow(date2)
    }

    handleSearch = (e) => {
        const search = e.target.value
        this.setState({
            search: search
        })
        console.log(search)
        if (search) {
            axios.get(`https://dumb-tickapp.herokuapp.com/api/v1/events/${search}/search`)
                .then(event => {
                    this.setState({
                        eventSearch: event.data
                    })
                    console.log(this.state.eventSearch)
                }).catch(err => {
                    console.log(err)
                })
        }
    }

    render() {
        const { today, tomorrow } = this.props.events
        const eventSearch = this.state.eventSearch
        // console.log(today)
        // console.log(tomorrow)
        // console.log(eventSearch)

        return (
            <div>
                <div className="header">
                    <Header />
                </div>
                <br /><br />
                <div className='container'>
                    <input type='search'
                        placeholder='Search Event'
                        style={{ width: '50%', border: 'none', borderBottom: 'solid', outline: 'none', marginBottom: 30, fontSize: 30 }}
                        value={this.state.search}
                        onChange={this.handleSearch}
                    /><FontAwesomeIcon icon={faSearch} style={{ height: 30, width: 30 }} />
                </div>
                <NavCategory />
                <Container>
                    {this.state.search ?
                        <div className='searchEvent'>
                            <Row>
                                {eventSearch.map(item =>
                                    <Today
                                        id={item.id}
                                        title={item.title.substring(0, 20)}
                                        description={item.description.substring(0, 30)}
                                        img={item.img}
                                        price={item.price}
                                        start={item.start_time}
                                        category={item.category.name} />
                                )}
                            </Row>
                        </div>
                        :
                        <div className='event'>
                            <h1 style={{ fontSize: '2.5em' }}>Today</h1>
                            <Row>
                                {today.map(item =>
                                    <Today
                                        id={item.id}
                                        title={item.title.substring(0, 20)}
                                        description={item.description.substring(0, 30)}
                                        img={item.img}
                                        price={item.price}
                                        start={item.start_time}
                                        category={item.category.name} />
                                )}
                            </Row>
                            <div className="upcomingContent">
                                <br />
                                <br />
                                <h1>Upcoming Event</h1>
                                <Row className="upcomingContent">
                                {tomorrow.map(item =>
                                    <Today
                                        id={item.id}
                                        title={item.title.substring(0, 20)}
                                        description={item.description.substring(0, 30)}
                                        img={item.img}
                                        price={item.price}
                                        start={item.start_time}
                                        category={item.category.name} />
                                )}
                                </Row>
                            </div>
                        </div>
                    }
                </Container>
                <Footer />
            </div >
        )
    }
}


const mapStateToProps = (state) => {
    return {
        events: state.events,
    }
}


const mapDispacthToProps = (dispatch) => {
    return {
        getEventsToday: (date) => dispatch(getEventsToday(date)),
        getEventsTomorrow: (date2) => dispatch(getEventsTomorrow(date2))
    }
}

export default connect(mapStateToProps,
    mapDispacthToProps
)(Home)