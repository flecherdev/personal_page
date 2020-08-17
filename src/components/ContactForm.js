import React from 'react';

class ContactForm extends React.Component {
    
    // state = {
    //     firsName: '',
    //     lastName: '',
    //     email: '',
    //     jobTitle: '',
    //     twitter: ''
    // }

    // handleChange = e => {
    //     // console.log({ 
    //     //     name: e.target.name,
    //     //     value: e.target.value 
    //     // })
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // si se maneja desde el button
    handleClick = e => {
        console.log("send form")
    }

    handleSubmit = e => {
        e.preventDefault(); //esto hace que no se recargue el form
        console.log("form sent to submit")
        console.log(this.state)
    }
    
    render() {
        return(
            <div>
                <h1>Send Mail</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Firs Name</label>
                        <input 
                            onChange={ this.props.onChange } 
                            className="form-control" 
                            type="text" 
                            name="firsName"
                            value={this.props.fomrmValues}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={ this.props.onChange } 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.props.fomrmValues}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={ this.props.onChange } 
                            className="form-control" 
                            type="text" 
                            name="email"
                            value={this.props.fomrmValues}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                            onChange={ this.props.onChange } 
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={this.props.fomrmValues}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={ this.props.onChange } 
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.props.fomrmValues}
                        />
                    </div>

                    {/* <button onClick={ this.handleClick } type="button" className="btn btn-primary">Send</button> */}
                    <button onClick={ this.handleClick }  className="btn btn-primary">Send</button>

                </form>
            </div>
        )
    }
}

export default ContactForm;