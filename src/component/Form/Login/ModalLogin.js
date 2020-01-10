import React, { Component } from 'react'
import { Modal, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import Login from './Login';

class ModalLogin extends Component {
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
				<Button variant="outline-light" onClick={this.handleShow} style={{ fontSize: '1em',
																			outline:'none', 
																			border:'none' }}>
				{/* <FontAwesomeIcon icon={ faSignInAlt } style={{marginTop:15}} /> */}
				Log In
        </Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Log In</Modal.Title>
					</Modal.Header>
					<Modal.Body>
					<Login />


					</Modal.Body>
			
				</Modal>
			</>
		);
	}
}

export default ModalLogin;