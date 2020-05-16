import React from 'react';

class Badge extends React.Component {
    // metodo obligatorio define lo que se va a ver en el componente
    render() {
        return (
            <div>
                <div>
                    <img src="" alt=""/>
                </div>

                <div>
                    <img src="" alt=""/>
                    <h1>Ezequiel <br/>Freire</h1>
                </div>

                <div>
                    <p>Software Engineer</p>
                    <p>@flecherdev</p>
                </div>

                <div>
                    <p>#footer</p>
                </div>
            </div>
        )
    }
}

export default Badge;
