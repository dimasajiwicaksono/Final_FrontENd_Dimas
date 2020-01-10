import React, { Component } from 'react';
import { Dropdown, DropdownButton, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { profile } from '../../_actions/profile';



class DropDownProfile extends Component {


    handleClick = () => { 
        localStorage.clear();
        window.location.href=('/');
    }


    componentDidMount() {

        const userId = this.props
        this.props.getUser()
        console.log(userId)
    }

    render() {

        const { data } = this.props.profile
        console.log(data)



        const trigger = (
            <span>
                <Image src="https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg" />
            </span>
        )
        return (

            <DropdownButton
                trigger={trigger} 
                alignRight id="loader" 
                title="Profile" 
                variant ='danger'
                >

                <div className="dropdown-menu-right">
                    <Dropdown.Item as="block" >
                        <Row >
                            <Col>
                                <Image src={data.img} style={{ borderRadius: "50%" }} />
                            </Col>
                            <Col>
                                {data.name} <br />
                                {data.email}
                            </Col>
                        </Row>

                    </Dropdown.Item >
                    <Link to={`/profile/${data.id}`}> <Dropdown.Item as="button" style={{ textDecoration: "none" }}> Profile</Dropdown.Item></Link>
                    <Link to='/myticket'><Dropdown.Item as="button" style={{ textDecoration: "none" }}> My Ticket</Dropdown.Item></Link>
                    <Link to='/payment'><Dropdown.Item as="button" style={{ textDecoration: "none" }}> Payment</Dropdown.Item></Link>
                    <Link to='/add_event'><Dropdown.Item as="button" style={{ textDecoration: "none" }}> Add Event</Dropdown.Item></Link>
                    <Dropdown.Divider />

                    {/* <Link to='/home'> */}
                        <Dropdown.Item as="button" onClick = {this.handleClick} style={{ textDecoration: "none" }}>
                            Logout
                    </Dropdown.Item>
                    {/* </Link> */}
                </div>
            </DropdownButton>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (userId) => dispatch(profile(userId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DropDownProfile)