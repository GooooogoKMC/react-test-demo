import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Home from '../components/Home';
import Table from '../containers/Table';
import Tree from '../containers/Tree';

class App extends Component {
    render() {
        return (
            <div className='wrapper'>
                <BrowserRouter basename='/'>
                    <div className="navi">
                        <NavLink to='/' exact activeClassName="active">Home</NavLink>
                        <NavLink to='/tree' activeClassName="active">Tree</NavLink>
                        <NavLink to='/table' activeClassName="active">Table</NavLink>
                    </div>
                    <div className="content">
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/tree' component={Tree}></Route>
                        <Route path='/table' component={Table}></Route>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
