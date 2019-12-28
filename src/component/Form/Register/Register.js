import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Login extends Component {

    userData;

    constructor(props) {
        super(props);


        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',

        }
    }

    // Form Events
    onChangeFullName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeUserName(e) {
        this.setState({ username: e.target.value })
    }

    onChangeName(e) {
        this.setState({ password: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()

        this.setState({
            name: '',
            email: '',
            username: '',
            password: '',
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                username: this.userData.username,
                password: this.userData.password,
            })
        } else {
            this.setState({
                name: '',
                email: '',
                username: '',
                password: '',
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    render() {
        return (

            <Form onSubmit={this.onSubmit} style={{ marginLeft: 180 }}>
                <div className="form-center">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="name" className="form-control" value={this.state.username} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>username</label>
                        <input type="username" className="form-control" value={this.state.name} onChange={this.onChangeUserName} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <Button style={{ color: "white" }} variant="dark" type="submit" className="btn-continue">
                         Submit   {/* <Link to="/Home" style={{ color: "white" }}>Continue</Link> */}
                        </Button>
                    </div>
                    <br /><br />
                </div>
            </Form>

        )
    }
}