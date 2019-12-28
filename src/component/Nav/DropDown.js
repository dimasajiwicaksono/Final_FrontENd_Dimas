import React, { Component } from 'react';
import { Dropdown, DropdownButton, Nav, Button, Image, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class DropDownProfile extends Component {
    render() {
        const trigger = (
            <span>
                <Image src="https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg" />
            </span>
        )
        return (

            <DropdownButton
                trigger={trigger} alignRight id="loader" title="Profile" >
                <div className="dropdown-menu-right">
                    <Dropdown.Item as="block" >
                        <Row >
                            <Col>
                                <Image src="https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg" style={{ width: "50px", borderRadius: "50%" }} />
                            </Col>
                            <Col>
                                Dimas Aji Wicakasono <br />
                                @dimasajiwicaksono
                            </Col>
                        </Row>

                    </Dropdown.Item >
                    {/* <Link to ="#"> */}
                    <Dropdown.Item as="button" style={{ textDecoration: "none" }}> Profile</Dropdown.Item>
                    <Dropdown.Item as="button" style={{ textDecoration: "none" }}> My Ticket</Dropdown.Item>
                    <Dropdown.Item as="button" style={{ textDecoration: "none" }}> Payment</Dropdown.Item>
                    <Dropdown.Item as="button" style={{ textDecoration: "none" }}> Add Event</Dropdown.Item> 
                    <Dropdown.Divider />
                    <Dropdown.Item as="button" style={{ textDecoration: "none" }}> Logout</Dropdown.Item>
                                       {/* </Link> */}
                </div>
            </DropdownButton>
        )
    }
}