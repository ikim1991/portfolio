import React from 'react';
import NavBar from '../components/NavBar';
import data from '../data/projects'

class Projects extends React.Component{
  constructor(){
    super()
    this.state = {
      navigator: 1
    }
  }

  createDots(){
    const max = Object.keys(data).length
    const content = []
    for(let i = max; i > 0; i--){
      if(this.state.navigator === (max - i) + 1){
        content.push(<div className="dot" key={(max-i)+1} value={(max-i)+1} style={{backgroundImage: "linear-gradient(to bottom right,#ff8a00,#e52e71)"}}></div>)
      } else{
        content.push(<div className="dot" key={(max-i)+1} value={(max-i)+1} onClick={this.onDotClick}></div>)
      }
    }
    return content
  }

  onDotClick = (e) => {
    let i = parseInt(e.target.getAttribute("value"))
    this.setState({ navigator: i })
  }

  onLeftClick = () => {
    if(this.state.navigator !== 1){
      this.setState((state) => {
        return { navigator: state.navigator - 1 }
      })
    }
  }

  onRightClick = () => {
    if(this.state.navigator !== Object.keys(data).length){
      this.setState((state) => {
        return { navigator: state.navigator + 1 }
      })
    }
  }

  render(){
    return (
      <div>
        <NavBar buttons={this.props.buttons}/>
        <div className="projects">
          <div className="header">
            <h1>My Projects</h1>
          </div>
          <div className="main">
            <div className="navigator w3-padding">
              <i className="fa fa-arrow-left w3-xxlarge left-arrow" onClick={this.onLeftClick}></i>
              {this.createDots()}
              <i className="fa fa-arrow-right w3-xxlarge right-arrow" onClick={this.onRightClick}></i>
            </div>
            <div className="projects-content">
              <div className="projects-grid-header">
                <h3 className="w3-margin-bottom">{data[this.state.navigator].title}</h3>
                <img src={`portfolio${data[this.state.navigator].url}`} alt="Profile" style={{width: 400, height:400, padding: 10}}/>
              </div>
              <div className="projects-grid-body">
                <div>
                  <h6>PROJECT SUMMARY</h6>
                  <p>{data[this.state.navigator].summary}</p>
                </div>
                <div className="projects-list">
                  <h6>TECHNOLOGIES AND FRAMEWORKS</h6>
                  <ul>
                    {data[this.state.navigator].technologies.map((li, ind) => {
                      return (<li className="projects-technologies" key={ind}>{li}</li>)
                    })}
                  </ul>
                </div>
                <h6>LINKS</h6>
                <div className="projects-links">
                  <a href={data[this.state.navigator].github} target="_blank" rel="noopener noreferrer">[GitHub Repo]</a><br/>
                  <a href={data[this.state.navigator].deployment} target="_blank" rel="noopener noreferrer">[Deployment]</a>
                </div>
              </div>
            </div>


          </div>
          <div className="filler">
          </div>
        </div>
      </div>
  )}
}

export default Projects
