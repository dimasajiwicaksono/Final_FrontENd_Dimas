import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';



class ModalLogin extends Component() {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            setShow: false,
            error: null
        };

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    }

    render() {
        // const [show, setShow] = useState(false);
        

        return (
            <div>
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ModalLogin;
// render(<Example />);