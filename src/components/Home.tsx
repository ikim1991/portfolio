import React from 'react';
import bg from '../assets/images/bg.jpg';

const Home = () => {

    return(
        <div className="home" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>    
        </div>
    )
}

export default Home;