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
    }
    render() {
        const { data, isLoading, error } = this.props.categories;
        const styles = {
            margin:'50%'
        }

        if (isLoading) {
            return <h1 style={styles}>now loading</h1>
        }

        if (error) {
            return <h1 style={styles}>Bad Request</h1>
        }
        
        return (
            
            <div>
                <div className='header'>
                    <Header />
                </div>
                <br /><br />
                <div className='container'>
                    <Container>
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