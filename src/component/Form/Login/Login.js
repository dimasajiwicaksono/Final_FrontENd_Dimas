import React, { Component } from 'react';
import { Form, Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Login extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
        }
    }

    // Form Events
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeName(e) {
        this.setState({ password: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()

        this.setState({
            email: '',
            password: '',
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                email: this.userData.email,
                password: this.userData.password,
            })
        } else {
            this.setState({
                email: '',
                password: '',
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    render() {
        return (
            <Container style={{marginTop:50, width:700}}>
            <Form onSubmit={this.onSubmit}>
                <div className="form-center">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                    <Link to="/Home" style={{ color: "white" }}> <Button style={{ color: "white" }} variant="dark" type="submit" className="btn-continue">
                            Submit 
                            </Button></Link>
                    </div>
                    <br /><br />
                </div>
            </Form>
            </Container>

        )
    }
}