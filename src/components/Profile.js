import React from 'react';
import perfil from '../img/perfil.jpg';
import logo from '../img/icon_invader_violet.png';
import linkedin from '../img/linkedin.png';
import twitter from '../img/twitter.png';

import './style/Profile.css'


class Profile extends React.Component {
    // metodo obligatorio define lo que se va a ver en el componente
    render() {
        return (
            <div className="Profile">
                <div className="Profile__header">
                    <img src={logo} alt=""/> 
                    <p>CardIDTech</p>
                </div>

                <div className="Profile__section-name">
                    <img className="Profile__avatar" src={perfil} alt=""/>
                    <h1>Ezequiel Freire</h1>
                </div>

                <div className="Profile__section-info">
                    <p>Software Engineer</p>
                    <div className="conteiner">
                        <img className="twit" 
                            src={twitter}
                            href="https://twitter.com/flecherdev"
                        /> <a href="https://twitter.com/flecherdev">@flecherdev</a> 
                     
                        <img className="twit" 
                            src={linkedin}
                            href="https://www.linkedin.com/in/ezequiel-alejandro-freire-6a061152/"
                        /> <a href="https://www.linkedin.com/in/ezequiel-alejandro-freire-6a061152/">@ezequielfreire</a> 
                     
                    </div>
                </div>

                <div className="Profile__footer">
                    <p>#made in argentina 💚</p>
                </div>
            </div>
        )
    }
}

export default Profile;
