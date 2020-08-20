import React from 'react';

import Profile from '../components/Profile';
import Whoami from '../components/Whoami';
import ContactForm from '../components/ContactForm';

class Home extends React.Component {

    state = { form: {
        firsName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    }}

    handleChange = e => {
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return(
            <React.Fragment>
        

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
                            {/* <ContactForm 
                                onChange={ this.handleChange }
                                formValues={ this.state.form } 
                            /> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;
