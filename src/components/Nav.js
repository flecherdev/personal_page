import React from 'react';
import logo from '../img/icon_invader_violet.png';

import './style/Nav.css';
import { Link, NavLink } from 'react-router-dom';


class Nav extends React.Component {
    render(){
        return( 
            <div className="Nav">
                <div className="container-fluid">
                    <div className="Nav__brand" href="">
                        <img 
                            className="Nav__brand-logo" 
                            src={logo}
                        />
                        <span>
                            <Link id="RouterNavLink" to="/">Home</Link>
                            {/* <NavLink to="/"/> */}
                        </span>
                        <span>/</span>
                        <span>
                            <Link id="RouterNavLink" to="/projects">Projects</Link>
                            {/* <NavLink to="/projects"/> */}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;