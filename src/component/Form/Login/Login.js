import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

class Login extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            message : false,
            show: false
            
        }
    }

    // Form Events
    onChangeUserName(e) {
        this.setState({ username: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    
    handleClick = (event) => {
        this.props.handleClose()
        event.preventDefault()
        const { username, password } = this.state;
        if (!username || !password) {
            this.setState({
                err: true,
                message :'Password/Username Wrong',
                username:'',
                password:'',
                
            })
        } else {
            this.setState({
                err: false,
                username:'',
                password:'',
                show:false

            })
            axios.post('https://dumb-tickapp.herokuapp.com/api/v1/login', {
                username: this.state.username,
                password: this.state.password
            }).then(res => {
                const data = res.data;
                console.log(data)
                localStorage.setItem("id", data.user.id);
                localStorage.setItem("name", data.user.name);
                localStorage.setItem("username", data.user.username);
                localStorage.setItem("email", data.user.email);
                localStorage.setItem("token", data.token);
                localStorage.setItem("isLogged", true);
                window.location.reload()
            }
            ).catch(err => { console.log(
                alert('Mohon Masukan Pass yang Benar')
            ) })
        }
    }

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            username: '',
            password: '',
            show:false
        })
    }




    render() {
        return (
            <Container style={{ marginTop: 50 }}>
                <Form onSubmit={this.onSubmit}>
                    <div className="form-center">
                        <div className="form-group">
                            <label>Username</label>
                            <input type="username" 
                                className="form-control" 
                                value={this.state.username} 
                                onChange={this.onChangeUserName} required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" 
                                className="form-control" 
                                value={this.state.password} 
                                onChange={this.onChangePassword} required />
                        </div>
                        <div className="form-group">
                            
                                <Button style={{ color: "white" }}
                                    variant="dark" type="submit"
                                    className="btn-primary"
                                    onClick={this.handleClick}>
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

export default Login;