import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom' 
import Home from '../page/Home'
import Projects from '../page/Projects';
import NotFound from '../page/NotFound';
import Layout from './Layout';

function App () {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/projects" component={Projects } />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
    
}

export default App