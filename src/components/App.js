import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom' 
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
                    <Route path="/projects" component={Projects} />
                    <Route component={NotFound} />
                    <Route path="**" render={() => (<Redirect to="/" />)} /> 
                </Switch>
            </Layout>
        </BrowserRouter>
    )
    
}

export default App