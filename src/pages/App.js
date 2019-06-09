import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom'

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
                        <Route exact path='/' component={() => (<div>Home</div>)}></Route>
                        <Route path='/tree' component={() => (<div>1</div>)}></Route>
                        <Route path='/table' component={() => (<div>2</div>)}></Route>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
