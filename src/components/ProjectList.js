import React from 'react'

class ProjectList extends React.Component {
    render() {
        return(
            <div className="Projects">
                {this.props.project.map((project) => {
                    return(
                        <div key={project.id} className="Projects__Card card" >
                            <div className="Projects__Card__Image">
                                <img src={project.image} className="card-img-top" alt=""/>
                            </div>
                            <div class="container card-body">
                                <h5 className="card-title">
                                    <span className="font-weight-bold">{project.title}</span>
                                </h5>
                                <p className="card-text">{project.description}</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" className="btn btn-primary">Code github</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ProjectList