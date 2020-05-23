import React from 'react';
import Nav from '../components/Nav';
import Profile from '../components/Profile';
import Whoami from '../components/Whoami';

class Home extends React.Component {
    render(){
        return(
            <div>
                <Nav />

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mt-5">
                            <Profile 
                                fisrtName="Ezequiel" 
                                lastName="Freire"
                                jobTitle="Software Engineer"
                                twitter="flecherdev"
                                github="flecherdev"
                                linkedin="ezequielfreire"
                            /> 
                        </div>

                        <div className="col-12 col-md-6 mt-5 mb-5">
                            <Whoami />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
