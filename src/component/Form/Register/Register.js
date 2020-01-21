import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';


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
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeUserName(e) {
        this.setState({ username: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }


    handlePress = () => {
        const { username, password, email, name } = this.state;
        if (!username || !password || !name || !email) {
            this.setState({
                err: true
            })
        } else {
            this.setState({
                err: false
            })
            axios.post('https://dumb-tickapp.herokuapp.com/api/v1/register', {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                name: this.state.name
            }).then(res => {
                const data = res.data;
                console.log(data)
                localStorage.setItem("id", data.users.id);
                localStorage.setItem("name", data.users.name);
                localStorage.setItem("username", data.users.username);
                localStorage.setItem("email", data.users.email);
                localStorage.setItem("token", data.token);
                localStorage.setItem("isLogged", true);
                window.location.href=('/');
            })
        }
    }

    onSubmit(e) {
        e.preventDefault()

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
            <Container style={{ marginTop: 50 }}>
                <Form onSubmit={this.onSubmit} >
                    <h1 style={{ marginBottom: 40 }}>Registrasi disini</h1>
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
                                onChange={this.onChangeEmail} required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword} />
                        </div>
                        <div className="form-group">
                          
                                <Button style={{ color: "white" }}
                                    variant="dark"
                                    type="submit"
                                    className="btn-primary"
                                    onClick={this.handlePress}>
                                    Submit
                        </Button>
                        </div>
                        <br /><br />
                    </div>
                </Form>
            </Container>

        )
    }
}

