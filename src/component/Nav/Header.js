import React, { Component } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import DropDown from './DropDown';

export default class Header extends Component {
    render() {
        return (
                <Nav className = "lg bg-success variant-dark">
                    <Navbar.Brand href='/Home'>
                        <h1>Dumb Tick</h1>
                    </Navbar.Brand>
                    <Navbar className ="icon" inline>
                        <div className ='button' style={{marginLeft:"300px"}}>
                            <span inline>
                                <div>
                                <Button variant = 'outline-dark' type = 'submit'>
                                    Register
                                </Button>
                                <Button variant = 'outline-dark' type = 'submit'>
                                    Login
                                </Button>
                                <div className="button">
                                    <DropDown />
                                </div>
                                </div>
                            </span>
                        </div>
                    </Navbar>
                </Nav>
        )
    }
}
