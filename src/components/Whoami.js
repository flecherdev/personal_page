import React from 'react';
import './style/Whoami.css'

class Whoami extends React.Component {
    render() {

        return (
            <div className="Whoami container">
                <div className="row">
                    <h1>Who am I?</h1>
                </div>
                <div className="row">
                    <div className="text">
                        I'm a <span>Fullstack Developer</span>. I love <span>javascript/Angular/React/Node/Pyrhon/PHP </span>😃 . I'm from 🇦🇷. I'm studying at UTN.
                        I'm a <span>geek</span> of 8 and 16bit 👾. I love <span>traveling</span> 🏝✈ and <span>meeting</span> new <span>people</span> and their customs.
                    </div>
                </div>
            </div>
        )
    }
}

export default Whoami;