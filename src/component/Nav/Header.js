import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import {connect } from 'react-redux'

import DropDownProfile from './DropDown';
import ModalLogin from '../Form/Login/ModalLogin'
import ModalRegister from '../Form/Register/ModalRegister';

import { profile } from '../../_actions/profile';

class Header extends Component {

    componentDidMount() {

        const userId =localStorage.getItem("id")
        this.props.getUser(userId)
    }

    render() {

        const { data, fetching, error } = this.props.profile
        console.log(data)

        return (

            <Navbar className='justify-content-between'
                    style={{backgroundColor:'#232020'}}
                    >

                <Navbar.Brand
                    className='light'
                    style={{ fontSize: '2em', color: 'white' }}
                    href='/'>
                    e-Ventick
                    </Navbar.Brand>
                <Nav className='justify-content-end'>
                    {localStorage.getItem('token') ?

                        (<DropDownProfile />) : (

                        <div>
                
                            <ModalLogin style={{ fontSize: '2em', color: 'white', marginRight:10 }} />,
                            <ModalRegister style={{ fontSize: '2em', color: 'white' , marginLeft:20}} />
                        </div> )
                        }
                </Nav>
            </Navbar>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile : state.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (userId) => dispatch(profile(userId))
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Header)
