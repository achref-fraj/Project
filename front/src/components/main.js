import React from 'react';
import aa from '../assets/aa.mp4';

const Main = () => {
  return (
    <div className='main' >
      <div className="overlay"></div>
      <video src={aa} autoPlay loop muted style={{ width: '100%', height: '100%' }} />
      <div className="content">
        
      </div>
    </div>
  )
}

export default Main;
