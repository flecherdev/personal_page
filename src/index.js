import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

// en app tengo las rutas del proyecto 
import App from './components/App';


const container = document.getElementById('app');

// jsx
// const element = <h1>Hola, Ezequiel</h1>;

//  const name = 'Ezequiel'
// const element = React.createElement('h1', {}, `Hola, ${name}`)
// en jsx 
// const element = <h1>Hola, {name}</h1>;s

// al render se le tiene que agregar el componente cerrado < />
ReactDOM.render(<App/>, container);

