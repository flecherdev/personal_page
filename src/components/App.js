import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom' 
import Home from '../page/Home'
import Projects from '../page/Projects';

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/projects" component={Projects } />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App