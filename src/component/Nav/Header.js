import React, { Component } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import DropDownProfile from './DropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';


export default class Header extends Component {
    render() {
        return (
            <Navbar className=' bg-danger justify-content-between'
                    /*fixed='top'*/>
                <Navbar.Brand
                    className='light'
                    style={{ fontSize: '2em', color: 'white' }}
                    href='/Home'>
                    Dumb-Tick
                </Navbar.Brand>
                <Nav
                    className="justify-content-end "
                    style={{ fontSize: '1.5em', color: 'white' }}>
                        <FontAwesomeIcon icon={ faUser } style={{marginTop:15}} /><Nav.Link href='/Register'>Register</Nav.Link>
                        <FontAwesomeIcon icon={ faSignInAlt } style={{marginTop:15}} /><Nav.Link href='/Login'>Login</Nav.Link>
                    < DropDownProfile />
                </Nav>
            </Navbar>
        )
    }
}
