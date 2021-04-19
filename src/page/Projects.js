import React from 'react'

import ProjectList from '../components/ProjectList';
import '../components/style/Projects.css'

class Projects extends React.Component {
    state = {
        data: [
            {
                id: "1",
                title: "Comanda UTN",
                description: "Esta web app esta diseñada para generar un pedido y que este vaya pasando por diferentes empleados hasta el momento de cobrar, similar a las cadenas de comida rapida. Las tecnologias utilizadas son Angular 9 (FrontEnd) y SlimFramework(BackEnd)",
                image: "https://firebasestorage.googleapis.com/v0/b/ezequielfreiredev.appspot.com/o/comandautn.png?alt=media&token=d9402a5b-3b4b-4108-a16a-04707159cdba",
                github: "https://github.com/flecherdev/comanda-front",
                link: "https://comandautn.web.app/"
                
            },
            {
                id: "2",
                title: "Car Crash",
                description: "Es una web app que filtra autos segun caterioas. Se utilizo Angular 9 y Angular Material",
                image: "https://firebasestorage.googleapis.com/v0/b/ezequielfreiredev.appspot.com/o/carscrash.png?alt=media&token=e283bbea-8af3-44a2-bd04-f4f38371b3c7",
                github: "https://github.com/flecherdev/filter-car",
                link: "https://fir-crud-b03d8.web.app"
            },
            {
                id: "3",
                title: "Tienda de compras",
                description: "Tienda de compras es un proyecto realizado en el curso de Angular en Platzi.",
                image: "https://firebasestorage.googleapis.com/v0/b/ezequielfreiredev.appspot.com/o/platzi-store.png?alt=media&token=3af875e5-b56b-4391-ae06-72c2cf31213f",
                github: "https://github.com/flecherdev/platzi-store",
                link: ""
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <ProjectList project={this.state.data}/>
            </React.Fragment>
        )
    }
}

export default Projects