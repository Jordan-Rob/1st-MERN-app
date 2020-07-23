import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <Link to='/' className='text-white nav-link'>AR-AR</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link text-white" href="#">Assignments</Link>
                    </li>
                    <li className="nav-item">
                        <Link  to='/create' className="nav-link text-white" >Create Assignments</Link>
                    </li>
                    <li className="nav-item">
                        <Link  to='/signup' className="nav-link text-white" >Register Student</Link>
                    </li>
                    </ul>
                </div>
            </nav>
         );
    }
}
export default Nav;