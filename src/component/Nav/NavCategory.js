import React, { Component } from 'react';
import { Container, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { categoriesList } from '../../_actions/categoriesList';
import { Link } from 'react-router-dom';

class Category extends Component {

    componentDidMount() {
        
        this.props.getCategoriesList()
    }

    render() {

        const { data } = this.props.categoriesList;
        console.log (data )
        // if (fetching) {
        //     return <h1> now is loading </h1>
        // }
        

        return (
            <Container style={{ paddingTop: 0 }}>
                <h1 style={{marginRight:0, paddingleft:0}}>Category</h1>
                <Nav className='button-group' style={{ padding: 10, fontSize:"1em" }}>
                    {data.map((data, index) => (
                        <Nav.Link key={data.id} >
                            <Link to={`/category/${data.id}`} style={{ textDecoration: "none" }}>
                                <Button className='justify-item-center' md={3}
                                    style={{fontSize:'1.5em',backgroundColor:'#ff7315', width:200, border:'none'}}>{data.name}</Button>
                            </Link>
                        </Nav.Link>
                    ))}
                </Nav>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categoriesList: state.categoriesList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategoriesList: () => dispatch(categoriesList())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Category)