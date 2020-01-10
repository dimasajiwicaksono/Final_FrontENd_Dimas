import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Nav/Header';
import NavCategory from '../Nav/NavCategory';
import Footer from '../Nav/Footer';
import Today from '../Home/Content/Today';
import { connect } from 'react-redux';
import { events } from '../../_actions/events'


class Home extends Component {

    componentDidMount() {

        this.props.getEvents()
        console.log()

        
    }

    render() {
        const { data, fetching, error } = this.props.events
        console.log(data)


        return (
            <div>
                <div className="header">
                    <Header />
                </div>
                <br /><br />
                {/* <div><br /><br /> */}
                <NavCategory />
                
                <Container>
                    <h1 style={{fontSize:'2.5em'}}>Today</h1>
                <Row>
                    {data.map(item =>
                        <Today
                            id={item.id}
                            title={item.title.substring(0,20)}
                            description={item.description.substring(0,30)}
                            img={item.img}
                            price={item.price}
                            start={item.start_time}
                            category={item.category.name} />
                    )}
                </Row>
                    <div className="upcomingContent">
                        <br />
                        <br />

                        <h1>Upcoming</h1>
                        <Row className="upcomingContent">
                            <Col>
                                <Today />
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Footer />
            </div >
        )
    }
}


const mapStateToProps = (state) => {
    return {
        events: state.events
    }
}


const mapDispacthToProps = (dispatch) => {
    return {
        getEvents: () => dispatch(events())
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(Home)