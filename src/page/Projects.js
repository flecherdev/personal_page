import React from 'react'
import Nav from '../components/Nav';
import '../components/style/Projects.css'

class Projects extends React.Component {
    state = {
        data: [
            {
                id: "1",
                title: "Comanda UTN",
                description: "Esta web app esta diseñada para generar un pedido y que este vaya pasando por diferentes empleados hasta el momento de cobrar, similar a las cadenas de comida rapida.",
                image: ""
            },
            {
                id: "2",
                title: "Car Crash",
                description: "Es una web app que filtra autos segun caterioas",
                image: ""
            },
            {
                id: "3",
                title: "",
                description: "",
                image: ""
            }
        ]
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="Projects">
                    <div className="Projects__Card card" >
                        <img src="..." className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="Projects__Card card" >
                        <img src="..." className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="Projects__Card card" >
                        <img src="..." className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects