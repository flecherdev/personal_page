import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge'

const container = document.getElementById('app');

// jsx
// const element = <h1>Hola, Ezequiel</h1>;

//  const name = 'Ezequiel'
// const element = React.createElement('h1', {}, `Hola, ${name}`)
// en jsx 
// const element = <h1>Hola, {name}</h1>;


// al render se le tiene que agregar el componente cerrado < />
ReactDOM.render(<Badge/>, container);

