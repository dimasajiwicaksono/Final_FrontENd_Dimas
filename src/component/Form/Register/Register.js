import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Register extends Component {

    userData;

    constructor(props) {
        super(props);


        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            username: '',
            password: ''

        }
    }

    // Form Events
    onChangeFullName(e) {
        this.setState({name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({email: e.target.value })
    }

    onChangeUserName(e) {
        this.setState({username: e.target.value })
    }

    onChangePassword(e) {
        this.setState({password: e.target.value })
    }


    onSubmit(e) {
        // e.preventDefault()

        this.setState({
            name: '',
            email: '',
            username: '',
            password: ''
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState(
                {
                name: this.userData.name,
                email: this.userData.email,
                username: this.userData.username,
                password: this.userData.password
            }
            )
        } 
        else {
            this.setState({
                name: '',
                email: '',
                username: '',
                password: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    render() {
        return (
            <Container style={{marginTop:50, width:700}}>
            <Form onSubmit={this.onSubmit} >
                <h1 style={{marginBottom:40}}>Registrasi disini</h1> 
                <div className="form-center">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" 
                            className="form-control" 
                            value={this.state.name} 
                            onChange={this.onChangeFullName} />
                    </div>
                    <div className="form-group">
                        <label>username</label>
                        <input type="username" 
                            className="form-control" 
                            value={this.state.username} 
                            onChange={this.onChangeUserName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" 
                            className="form-control" 
                            value={this.state.email} 
                            onChange={this.onChangeEmail} required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" 
                            className="form-control" 
                            value={this.state.password} 
                            onChange={this.onChangePassword} />
                    </div>
                    <div className="form-group">
                        <Link to ='/home' >
                            <Button style={{ color: "white" }} 
                                variant="dark" 
                                type="submit"
                                className="btn-primary">
                         Submit   {/* <Link to="/Home" style={{ color: "white" }}>Continue</Link> */}
                        </Button>
                        </Link>
                    </div>
                    <br /><br />
                </div>
            </Form>
            </Container>

        )
    }
}