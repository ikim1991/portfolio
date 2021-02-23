import React, { useState } from 'react';
import data from './data/projects.json';

const Projects = () => {

    const [slider, changeSlider] = useState(0);

    const changeSliderRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeSlider(parseInt(e.currentTarget.value))
    }

    const leftSlide = () => {
        if(slider === 0){
            return;
        } else{
            changeSlider(slider => slider - 1)
        }
    }

    const rightSlide = () => {
        if(slider === (data.projects.length-1)){
            return;
        } else{
            changeSlider(slider => slider + 1)
        }
    }

    return(
        <div className="main">
            <div className="main-header">
                <h2>My Projects</h2>
            </div>
            <div className="projects-content three">
                <div className="projects">
                    {data.projects.map((project, i) => {
                        if((i === slider) || (i === slider+1) || (i === slider+2)){
                            return(
                                <div className="project" key={i}>
                                    <h3>{project.title}</h3>
                                    <div className="project-image">
                                        <img src={project.imageUrl} alt="project-icon"/>
                                    </div>
                                    <div>
                                        <p>Production: <a href={project.deployed} target="_blank"><i>Click Here</i></a></p>
                                        <p>Documentation: <a href={project.documentation} target="_blank"><i>Click Here</i></a></p>                                    
                                        <p>GitHub Repository: <a href={project.github} target="_blank"><i>Click Here</i></a></p>                                    
                                    </div>
                                </div>
                            )
                        } else{
                            return false;
                        }
                    })}
                </div>
            </div>
            <div className="projects-content two">
                <div className="projects">
                    {data.projects.map((project, i) => {
                        if((i === slider) || (i === slider+1)){
                            return(
                                <div className="project" key={i}>
                                    <h3>{project.title}</h3>
                                    <div className="project-image">
                                        <img src={project.imageUrl} alt="project-icon"/>
                                    </div>
                                    <div>
                                        <p>Production: <a href={project.deployed} target="_blank"><i>Click Here</i></a></p>
                                        <p>Documentation: <a href={project.documentation} target="_blank"><i>Click Here</i></a></p>                                    
                                        <p>GitHub Repository: <a href={project.github} target="_blank"><i>Click Here</i></a></p>                                    
                                    </div>
                                </div>
                            )
                        } else{
                            return false;
                        }
                    })}
                </div>
            </div>
            <div className="projects-content one">
                <div className="projects">
                    {data.projects.map((project, i) => {
                        if(i === slider){
                            return(
                                <div className="project" key={i}>
                                    <h3>{project.title}</h3>
                                    <div className="project-image">
                                        <img src={project.imageUrl} alt="project-icon"/>
                                    </div>
                                    <div>
                                        <p>Production: <a href={project.deployed} target="_blank"><i>Click Here</i></a></p>
                                        <p>Documentation: <a href={project.documentation} target="_blank"><i>Click Here</i></a></p>                                    
                                        <p>GitHub Repository: <a href={project.github} target="_blank"><i>Click Here</i></a></p>                                    
                                    </div>
                                </div>
                            )
                        } else{
                            return false;
                        }
                    })}
                </div>
            </div>
            <div className="project-range">
                <i className="fa fa-angle-left left-arrow" onClick={leftSlide}></i>
                <input type="range" min="0" max={(data.projects.length - 1)} value={slider} className="slider" id="projectRange" onChange={changeSliderRange}/>
                <i className="fa fa-angle-right right-arrow" onClick={rightSlide}></i>
            </div>
        </div>
    )
}

export default Projects;