import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import data from './data/projects.json';

interface Props{
  buttons: string[]
}

const Projects = ({buttons}: Props) => {

  const [navigator, setNavigator] = useState(1)
  const [imageNumber, setImgNum] = useState(0)

  useEffect(()=> {
    document.addEventListener("keydown", handleEscKey)

    return(() => {
      document.removeEventListener("keydown", handleEscKey)
    })
  }, [])

  //@ts-ignore
  const handleEscKey = (e) => {
    if(e.key === "Escape"){
      document.getElementById("modal")!.style.visibility = "hidden"
    }
  }

  // @ts-ignore
  const onDotClick = (e) => {
    let i = parseInt(e.target.getAttribute("value"))
    setNavigator(i)
  }

  const createDots = () => {
    const max = data.projects.length
    const content = []
    for(let i = max; i > 0; i--){
      if(navigator === (max - i) + 1){
        // @ts-ignore
        content.push(<div className="dot" key={(max-i)+1} value={(max-i)+1} style={{backgroundImage: "linear-gradient(to bottom right,#ff8a00,#e52e71)"}}></div>)
      } else{
        // @ts-ignore
        content.push(<div className="dot" key={(max-i)+1} value={(max-i)+1} onClick={onDotClick} style={{backgroundColor: "#201c29"}}></div>)
      }
    }
    return content
  }

  const onLeftClick = () => {
    if(navigator !== 1){
      setNavigator((navi => navi - 1))
    }
  }

  const onRightClick = () => {
    if(navigator !== data.projects.length){
      setNavigator((navi => navi + 1))
    }
  }

  //@ts-ignore
  const onModalExit = (e) => {
    e.target.parentElement.style.visibility = "hidden"
  }

  //@ts-ignore
  const onModalOpen = (e) => {
    document.getElementById("modal")!.style.visibility = "visible"
  }

  //@ts-ignore
  const nextImage = (e) => {
    if(imageNumber === data.projects[navigator - 1].imageurl.length - 1){
      setImgNum(0)
    } else{
      setImgNum(num => num + 1)
    }
  }

  return (
    <div>
      <NavBar buttons={buttons}/>
      <div className="projects">
        <div className="header">
          <h1>My Projects</h1>
        </div>
        <div className="main">
          <div className="projects-modal" id="modal">
            <div className="exit" onClick={onModalExit}>X</div>
            <div className="modal-text">{`(${imageNumber + 1}/${data.projects[navigator - 1].imageurl.length}) ${data.projects[navigator - 1].imagetext[imageNumber]}`}</div>
            <div className="modal-images"><img className="modal-image" src={`portfolio${data.projects[navigator - 1].imageurl[imageNumber]}`} alt="Profile" onClick={nextImage}/></div>
            <div className="filler">
            </div>
          </div>
          <div className="navigator w3-padding">
            <i className="fa fa-arrow-left w3-xxlarge left-arrow" onClick={onLeftClick}></i>
            {createDots()}
            <i className="fa fa-arrow-right w3-xxlarge right-arrow" onClick={onRightClick}></i>
          </div>
          <div className="projects-content">
            <div className="projects-grid-header">
              <h2 className="w3-margin-bottom">{data.projects[navigator - 1].title}</h2>
              <img className="projects-image" src={`portfolio${data.projects[navigator - 1].url}`} alt="Profile" style={{width: 400, height:400, padding: 10}} onClick={onModalOpen}/>
              <h2 className="view-images" onClick={onModalOpen}>Preview Project</h2>
            </div>
            <div className="projects-grid-body">
              <div>
                <h6>PROJECT SUMMARY</h6>
                <p>{data.projects[navigator - 1].summary}</p>
              </div>
              <div className="projects-list">
                <h6>FRONT-END</h6>
                <ul>
                  {data.projects[navigator - 1].front.map((li, ind) => {
                    return (<li className="projects-technologies" key={ind}>{li}</li>)
                  })}
                </ul>
              </div>
              <div className="projects-list">
                <h6>BACK-END</h6>
                <ul>
                  {data.projects[navigator - 1].back.map((li, ind) => {
                    return (<li className="projects-technologies" key={ind}>{li}</li>)
                  })}
                </ul>
              </div>
              <div className="projects-links">
                <h6>REFERENCES</h6>
                {data.projects[navigator - 1].links.map((li, ind) => {
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
  )
}

export default Projects
