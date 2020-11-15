import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import data from './data/title.json';

interface Props{
  buttons: string[]
}

class Title extends React.Component<Props>{
  render(){
    return(
      <div className="title">
        <NavBar buttons={this.props.buttons}/><br/><br/>
        <div className="myinfo">
          <h1>{data.name}</h1>
          <h3>{data.title}</h3>
          {
            Object.entries(data.sns).map((a, i) => <a href={a[1]} className="w3-bar-item w3-button w3-xxlarge" key={i} target="_blank" rel="noopener noreferrer"><i className={`fa fa-${a[0]}`}></i></a>)
          }
         <br/><br/><br/>
          <Link className="discover" to="/about">Discover</Link>
        </div>
      </div>
    )
  }
}

export default Title
