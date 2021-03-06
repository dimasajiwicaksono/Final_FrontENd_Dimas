import React, { Component } from 'react'
import { Modal, Button} from 'react-bootstrap'

import Register from './Register';


class ModalRegister extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
			<>
				<Button variant='#f17362' 
					onClick={this.handleShow} 
					style={{ fontSize: '1em', 
							color: 'white', 
							backgroundColor:'#ff7315',
							outline:'none' }}>
				Sign Up
				</Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Register</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Register handleClose={this.handleClose}/>
					</Modal.Body>
		
				</Modal>
			</>
		);
	}
}

export default ModalRegister;