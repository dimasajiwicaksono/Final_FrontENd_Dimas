import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/free-solid-svg-icons';
import Login from './component/Form/Login/Login';
import Register from './component/Form/Register/Register';
import Home from './component/Home/Home';
import CategoryPage from './component/Content/CategoryPage/CategoryPage';
import Profile from './component/Content/Profile/Profile';
import MyTicket from './component/Content/MyTicket/MyTicket';
import AddEvent from './component/Content/AddEvent/AddEvent';
import DetailEvent from './component/Content/detailEvent/DetailEvent'
import Payment from './component/Content/Payment/Payment';
import {BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './_redux/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
            <Provider store = {store}>
            <Router>
                <Switch>
                    <Route exact path = '/' component = {Home} />
                    <Route path = '/add_event' component ={AddEvent} />
                    <Route path = '/login' component = {Login} />
                    <Route path = '/register' component ={Register} />
                    <Route path = '/profile/:id' component = {Profile} />
                    <Route path = '/myticket' component ={MyTicket} />
                    <Route path = '/category/:id' component={CategoryPage} />  
                    <Route path = '/event/:id' component ={DetailEvent} />  
                    <Route path = '/payment' component={Payment} />               
                </Switch>
            </Router>
            </Provider>
            
, document.getElementById('root'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
