import React from 'react';
import Image from '../assets/images/chess.jpg';

const Projects = () => {
    return(
        <div className="main">
            <div className="main-header">
                <h2>My Projects</h2>
            </div>
            <div className="projects-content">
                <div className="projects">
                    <div className="project">
                        <h3>PROJECT TITLE</h3>
                        <img src={Image} alt="project-icon"/>
                        <div>
                            <p>DEPLOYED</p>
                            <p>REPOSITORY</p>
                            <p>DOCUMENTATION</p>
                        </div>
                    </div>
                    <div className="project">
                        <h3>PROJECT TITLE</h3>
                        <img src={Image} alt="project-icon"/>
                        <div>
                            <p>DEPLOYED</p>
                            <p>REPOSITORY</p>
                            <p>DOCUMENTATION</p>
                        </div>
                    </div>
                    <div className="project">
                        <h3>PROJECT TITLE</h3>
                        <img src={Image} alt="project-icon"/>
                        <div>
                            <p>DEPLOYED</p>
                            <p>REPOSITORY</p>
                            <p>DOCUMENTATION</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-range">
                <input type="range" min="1" max="5" className="slider" id="projectRange"/>
            </div>
        </div>
    )
}

export default Projects;