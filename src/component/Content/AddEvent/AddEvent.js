import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import Header from '../../Nav/Header';

export default class AddEvent extends Component {
    render() {
        return (
            <div >
                <div>
                    <Header />
                </div>
                <br /><br />
                <div className="container-lg-8"  style={{ marginLeft: 180, marginRight: 180 }} > 
                    <Form onSubmit={this.onSubmit}>
                        <div className="form-center">
                            <div className="form-group">
                                <input type="text" placeholder="Title Event" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Category" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Upload Panflet" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Start Time" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="End Time" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Price" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Adress Event" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Url Map" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Telp" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Deskripsi Event" className="form-control" />
                                {/* // value={this.state.email} onChange={this.onChangeEmail} /> */}
                            </div>
                            <div className="form-group">
                                <Button style={{ color: "white" }} variant="primary" type="submit" className="btn-continue">
                                    Publish
                                {/* <Link to="/Home" style={{ color: "white" }}>Continue</Link> */}
                                </Button>
                            </div>
                            <br /><br />
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}
