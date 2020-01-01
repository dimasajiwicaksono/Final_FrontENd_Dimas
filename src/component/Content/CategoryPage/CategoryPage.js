import React, { Component } from 'react';
import { Row, Col, Form, Container, InputGroup } from 'react-bootstrap';
import CategoryContent from './CategoryContent';
import Header from '../../Nav/Header';
import { connect } from 'react-redux';
import { categories } from '../../../_actions/categories';
import Footer from '../../Nav/Footer';

class CategoryPage extends Component {

    componentDidMount() {
        const categoryId = this.props.match.params.id

        this.props.getCategories(categoryId)
        console.log(categoryId)
    }
    render() {
        const { data, fetching, error } = this.props.categories;
        console.log(data)
        
        if (fetching) {
            return <h1>now loading</h1>
        }
        
        return (
            
            <div>
                <div className='header'>
                    <Header />
                </div>
                <br /><br />
                <div className='container'>
                    <Container>
                        <h1 style={{ color: "#ff4d4d" }}></h1>
                        <div className='formGroup'>
                            <Form.Group as={Col} md={4}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">Sort By</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type='date'
                                        placeholder='CHOOSE DATE'
                                        value='date'>
                                    </Form.Control>
                                </InputGroup>
                            </Form.Group>
                        </div>
                        <div>
                            <h1>{this.props.match.params.id}</h1>
                        </div>
                        <Row>
                            {data.map(item =>
                                <CategoryContent 
                                title = {item.title} 
                                category = {item.category.name}
                                description = {item.description}
                                img = {item.img}
                                start_time= {item.start_time}
                                id = {item.id}
                            />
                            )}
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

const mapDispacthToProps = (dispatch) => {
    return {
        getCategories: (categoryId) => dispatch(categories(categoryId))
    }
}


export default connect(mapStateToProps, mapDispacthToProps)(CategoryPage)