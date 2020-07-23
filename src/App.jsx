import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route} from 'react-router-dom'
import Assignments from './Assignments'
import RegisterStudent from './RegisterStudent'
import CreateAssignment from './CreateAssignment'
import Nav from './Nav'


class App extends Component {
    render() { 
        return ( 
            <BrowserRouter>
                <Nav />
                <div className='container'>
                    <Route path='/signup' component={RegisterStudent} />
                    <Route path='/create' component={CreateAssignment} />
                    <Route path='/' exact component={Assignments} />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;