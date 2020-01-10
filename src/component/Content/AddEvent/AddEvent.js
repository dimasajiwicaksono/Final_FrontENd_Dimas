import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from '../../Nav/Header'


export default class AddEvent extends Component {

    constructor(props) {
        super(props);


        // this.onChangeTitle = this.onChangeTitle.bind(this);
        // this.onChangeCategory = this.onChangeCategory.bind(this);
        // this.onChangeImg = this.onChangeUserImg.bind(this);
        // this.onChangePrice = this.onChangePrice.bind(this);
        // this.onChangeStartTime = this.onChangeStartTime.bind(this);
        // this.onChangeEndTime = this.onChangeEndTime.bind(this);
        // this.onChangeAddress = this.onChangeAddress.bind(this);
        // this.onChangeUrlMap = this.onChangeUrlMap.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title:'',
            category:'',
            img:'',
            startTime: '',
            endTime: '',
            price: '',
            address: '',
            urlMap: '',
            description: ''
        }
    }

    // // Form Events
    onChangeTitle = (e) => {
        this.setState({title: e.target.value })
    }


    onChangeCategory =(e)=> {
        this.setState({category: e.target.value })
    }
    onChangeImg =(e) =>{
        this.setState({img: e.target.value })
    }
    onChangeStartTime =(e) =>{
        this.setState({startTime: e.target.value })
    }
    onChangeEndTime=(e)=> {
        this.setState({endTime: e.target.value })
    }
    onChangePrice=(e)=> {
        this.setState({price: e.target.value })
    }
    onChangeAddress=(e)=> {
        this.setState({address: e.target.value })
    }
    onChangeUrlMap=(e)=> {
        this.setState({urlMap: e.target.value })
    }
    onChangeDescription=(e)=> {
        this.setState({description: e.target.value })
    }




    handleClick = () => {
        const {  
            title,
            category,
            img,
            startTime,
            endTime,
            price,
            address,
            urlMap,
            description} = this.state;

        if (!title || !category || !img || !startTime ||
            !endTime || !price || !address || !urlMap || 
            !description ) {
            this.setState({
                err: true
            })
        } else {
            this.setState({
                err: false
            })
            axios.post('https://dumb-tickapp.herokuapp.com/api/v1/event', {
                title: this.state.title,
                category_id: this.state.category,
                img:this.state.title.img,
                start_time:this.state.startTime,
                end_time: this.state.endTime,
                price: this.state.price,
                address: this.state.address,
                urlMaps: this.state.urlMap,
                description: this.state.description
            }).then(res => {
                const data = res.data;
                console.log(data)
                window.location.reload();
            })
        }
    }

    onSubmit=(e) => {
        e.preventDefault()

        this.setState({
            title: '',
            category: '',
            img: '',
            startTime: '',
            endTime: '',
            price: '',
            address: '',
            urlMap: '',
            description: ''
        })
    }

    render() {
        return (

            <div>
                <Header />
            
            <Container style={{ marginTop: 50 }}>
                <Form onSubmit={this.onSubmit} >
                    <h1 style={{ marginBottom: 40 }}>Add Event</h1>
                    <div className="form-center">
                        <div className="form-group">
                            <label>title</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle} />
                        </div>
                        <div className="form-group">
                            <label>category</label>
                            <input type="select"
                                className="form-control"
                                value={this.state.category}
                                onChange={this.onChangeCategory} />
                        </div>
                        <div className="form-group">
                            <label>img</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.img}
                                onChange={this.onChangeImg} required />
                        </div>
                        <div className="form-group">
                            <label>Start Time</label>
                            <input type="date"
                                className="form-control"
                                value={this.state.startTime}
                                onChange={this.onChangeStartTime} />
                        </div>
                        <div className="form-group">
                            <label>End Time</label>
                            <input type="date"
                                className="form-control"
                                value={this.state.endTime}
                                onChange={this.onChangeEndTime} />
                        </div>
                        <div className="form-group">
                            <label>price</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.price}
                                onChange={this.onChangePrice} />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.address}
                                onChange={this.onChangeAddress} />
                        </div>
                        <div className="form-group">
                            <label>Url Map</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.urlMap}
                                onChange={this.onChangeUrlMap} />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text-area"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription} />
                        </div>



                        
                        <div className="form-group">
                            {/* <Link to='/home' > */}
                                <Button style={{ color: "white" }}
                                    variant="dark"
                                    type="submit"
                                    className="btn-primary"
                                    onClick={this.handleClick}>
                                    Submit
                        </Button>
                            {/* </Link> */}
                        </div>
                        <br /><br />
                    </div>
                </Form>
            </Container>
            </div>

        )
    }
}

