import React from 'react';
import logo from '../img/icon_invader_violet.png';

import './style/Nav.css';


class Nav extends React.Component {
    render(){
        return( 
            <div className="Nav">
                <div className="container-fluid">
                    <a className="Nav__brand" href="">
                        <img 
                            className="Nav__brand-logo" 
                            src={logo}
                        />
                        <span>Home</span>
                        <span>/</span>
                        <span>Proyects</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Nav;