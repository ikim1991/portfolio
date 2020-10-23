import React from 'react';
import NavBar from '../components/NavBar';
import data from '../data/projects'

class Projects extends React.Component{
  constructor(){
    super()
    this.state = {
      navigator: 1,
      imageNumber: 0
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleEscKey)
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleEscKey)
  }

  handleEscKey(e){
    if(e.keyCode === 27){
      document.getElementById("modal").style.visibility = "hidden"
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

  onModalExit = (e) => {
    e.target.parentElement.style.visibility = "hidden"
  }

  onModalOpen = (e) => {
    document.getElementById("modal").style.visibility = "visible"
  }

  nextImage = (e) => {
    if(this.state.imageNumber === data[this.state.navigator].imageurl.length - 1){
      this.setState({ imageNumber: 0})
    } else{
      this.setState((state) => {
        return { imageNumber: state.imageNumber + 1}
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
            <div className="projects-modal" id="modal">
              <div className="exit" onClick={this.onModalExit}>X</div>
              <div className="modal-text">{`(${this.state.imageNumber + 1}/${data[this.state.navigator].imageurl.length}) ${data[this.state.navigator].imagetext[this.state.imageNumber]}`}</div>
              <div className="modal-images"><img className="modal-image" src={`portfolio${data[this.state.navigator].imageurl[this.state.imageNumber]}`} alt="Profile" onClick={this.nextImage}/></div>
              <div className="filler">
              </div>
            </div>
            <div className="navigator w3-padding">
              <i className="fa fa-arrow-left w3-xxlarge left-arrow" onClick={this.onLeftClick}></i>
              {this.createDots()}
              <i className="fa fa-arrow-right w3-xxlarge right-arrow" onClick={this.onRightClick}></i>
            </div>
            <div className="projects-content">
              <div className="projects-grid-header">
                <h2 className="w3-margin-bottom">{data[this.state.navigator].title}</h2>
                <img className="projects-image" src={`portfolio${data[this.state.navigator].url}`} alt="Profile" style={{width: 400, height:400, padding: 10}} onClick={this.onModalOpen}/>
                <h4 className="view-images" onClick={this.onModalOpen}>View Project</h4>
              </div>
              <div className="projects-grid-body">
                <div>
                  <h6>PROJECT SUMMARY</h6>
                  <p>{data[this.state.navigator].summary}</p>
                </div>
                <div className="projects-list">
                  <h6>TECHNOLOGIES USED</h6>
                  <ul>
                    {data[this.state.navigator].technologies.map((li, ind) => {
                      return (<li className="projects-technologies" key={ind}>{li}</li>)
                    })}
                  </ul>
                </div>
                <div className="projects-links">
                  <h6>REFERENCES</h6>
                  {data[this.state.navigator].links.map((li, ind) => {
                    if(ind === 0){
                      return (<p className="projects-links-p" key={ind}>Website: <a className="projects-links-a" href={li} target="_blank" rel="noopener noreferrer">{li}</a></p>)
                    } else if(ind === 1){
                      return (<p className="projects-links-p" key={ind}>Front-end: <a className="projects-links-a" href={li} target="_blank" rel="noopener noreferrer">{li}</a></p>)
                    } else{
                      return (<p className="projects-links-p" key={ind}>Back-end: <a className="projects-links-a" href={li} target="_blank" rel="noopener noreferrer">{li}</a></p>)
                    }
                  })}
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
