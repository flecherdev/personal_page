import React from 'react'
import { Link } from 'react-router-dom';
import Projects from '../page/Projects';

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
                            <div className="container card-body">
                                <h5 className="card-title">
                                    <span className="font-weight-bold">{project.title}</span>
                                </h5>
                                <p className="card-text">{project.description}</p>
                            </div>
                            <div className="card-footer">
                                <a to="chart" target="_blank" href={project.github} className="Projects__Card__Fotter__Button btn btn-warning ">Code</a>
                                <a to="chart" target="_blank" href={project.link} className="Projects__Card__Fotter__Button btn btn-warning ">Link</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ProjectList