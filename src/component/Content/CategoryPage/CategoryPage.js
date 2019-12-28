import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import CategoryContent from './CategoryContent';
import Header from '../../Nav/Header';


export default class CategoryPage extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="categoryList">
                    <h1>MUSIC</h1>
                    <Form>
                        Sort By
                    </Form>
                    <Row className="categoryList">
                        <Col>
                            <CategoryContent />
                        </Col>
                        <Col>
                            <CategoryContent />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
