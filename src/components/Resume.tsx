import React from 'react';
import data from './data/resume.json';

const Resume = () => {

    const showDropdownInfo = (e: React.MouseEvent<HTMLDivElement>) => {

        let element = e.currentTarget.parentElement!.id
        
        switch(element){
            case('work-container'):
                document.querySelector<HTMLDivElement>('#work')!.style.display = 'block';
                break;
            case('certifications-container'):
                document.querySelector<HTMLDivElement>('#certifications')!.style.display = 'block';
                break;
            case('education-container'):
                document.querySelector<HTMLDivElement>('#education')!.style.display = 'block';
                break;
            case('programming-container'):
                document.querySelector<HTMLDivElement>('#programming')!.style.display = 'block';
                break;
            default:
                break;
        }
    }

    const hideDropdownInfo = (e: React.MouseEvent<HTMLDivElement>) => {
        let element = e.currentTarget.parentElement!.id
        
        switch(element){
            case('work-container'):
                document.querySelector<HTMLDivElement>('#work')!.style.display = 'none';
                break;
            case('certifications-container'):
                document.querySelector<HTMLDivElement>('#certifications')!.style.display = 'none';
                break;
            case('education-container'):
                document.querySelector<HTMLDivElement>('#education')!.style.display = 'none';
                break;
            case('programming-container'):
                document.querySelector<HTMLDivElement>('#programming')!.style.display = 'none';
                break;
            default:
                break;
        }
    }

    return(
        <div className="main">
            <div className="main-header">
                <h2>My Resume</h2>
            </div>
            <div className="resume-content">
                <div className="resume-summary">
                    <div id="work-container" className="resume-summary-item">
                        <div className="summary-container" onMouseOver={showDropdownInfo} onMouseOut={hideDropdownInfo}>
                            <i className="fa fa-briefcase"></i>
                            <p>WORK EXPERIENCE</p>
                            <p>+5 Years</p>
                        </div>
                        <div id="work" className="summary-dropdown" onMouseOver={showDropdownInfo} onMouseOut={hideDropdownInfo}>
                        <h3>Current Employment</h3>
                        <a href={data.work.current.url} target="_blank"><p><strong>{data.work.current.title}</strong> at <strong>{data.work.current.company}</strong></p></a>
                        <h3>Professional Work Experience</h3>
                        {data.work.past.map((item, i) => <a href={item.url} target="_blank" key={i}><p><strong>{item.title}</strong> at <strong>{item.company}</strong></p></a>)}
                        </div>
                    </div>
                    <div id="certifications-container" className="resume-summary-item">
                        <div className="summary-container" onMouseOver={showDropdownInfo} onMouseOut={hideDropdownInfo}>
                            <i className="fa fa-newspaper-o"></i>
                            <p>CERTIFICATIONS</p>
                            <p>+10 Completed</p>
                        </div>
                        <div id="certifications" className="summary-dropdown" onMouseOver={showDropdownInfo} onMouseOut={hideDropdownInfo}>
                            <h3>Web Development</h3>
                            {data.certifications.web.map((item, i) => <a href={item.url} target="_blank" key={i}><p><strong>{item.name}</strong> at <strong>{item.source}</strong></p></a>)}
                            <h3>Computer Science</h3>
                            {data.certifications.cs.map((item, i) => <a href={item.url} target="_blank" key={i}><p><strong>{item.name}</strong> at <strong>{item.source}</strong></p></a>)}
                            <h3>Miscellaneous</h3>
                            {data.certifications.jff.map((item, i) => <a href={item.url} target="_blank" key={i}><p><strong>{item.name}</strong> at <strong>{item.source}</strong></p></a>)}
                            <h3>And Many More...</h3>
                        </div>
                    </div>
                    <div id="education-container" className="resume-summary-item">
                        <div className="summary-container" onMouseOver={showDropdownInfo} onMouseOut={hideDropdownInfo}>
                            <i className="fa fa-mortar-board"></i>
                            <p>EDUCATION</p>
                            <p>5-Year Program</p>
                        </div>
                        <div id="education" className="summary-dropdown" onMouseOver={showDropdownInfo} onMouseOut={hideDropdownInfo}>
                            <h3>Undergraduate</h3>
                            <a href={data.education.undergrad.url} target="_blank"><p><strong>{data.education.undergrad.program}</strong> at <strong>{data.education.undergrad.at}</strong></p></a>
                            <h3>e-Learning</h3>
                            <p><strong>{data.education.self.program}</strong> at <strong>{data.education.self.at}</strong></p>
                        </div>
                    </div>
                    <div id="programming-container" className="resume-summary-item">
                        <div className="summary-container" onMouseOver={showDropdownInfo} onMouseOut={hideDropdownInfo}>
                            <i className="fa fa-laptop"></i>
                            <p>PROGRAMMING</p>
                            <p>+2 Years</p>
                        </div>
                        <div id="programming" className="summary-dropdown" onMouseOver={showDropdownInfo} onMouseOut={hideDropdownInfo}>
                            <h3>Work Knowledge</h3>
                            {data.programming.working.map((item, i) => <p key={i}>{item}</p>)}
                            <h3>Basic Knowledge</h3>
                            {data.programming.basic.map((item, i) => <p key={i}>{item}</p>)}
                        </div>
                    </div>
                </div>
                <div className="work-experience">
                    <h2>PROFSESIONAL WORK EXPERIENCE</h2>
                    {data.work.past.map((item, i) => {
                        return(
                            <div className="work-experiences" key={i}>
                                <div>
                                    <h4><strong>{item.title}</strong></h4>
                                    <h5><i>{item.length}</i></h5>
                                </div>
                                <div>
                                    <h4>{`${item.company} - ${item.city}`}</h4>
                                    <p>{item.summary}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <div className="education">
                    <h2>EDUCATION</h2>
                    <div className="educations">
                        <div>
                            <h4>{data.education.self.at}</h4>
                            <h5><i>2018 - Present</i></h5>
                        </div>
                        <div>
                            <h4>{data.education.self.program}</h4>
                            <p>{data.education.self.summary}</p>
                        </div>
                    </div>
                    <div className="educations">
                        <div>
                            <h4>{data.education.undergrad.at}</h4>
                            <h5><i>2009 - 2014</i></h5>
                        </div>
                        <div>
                            <h4>{data.education.undergrad.program}</h4>
                            <p>{data.education.undergrad.summary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;