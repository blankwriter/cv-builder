import React from 'react';
import './Home.css';
import Work from './Work.svg'

const Home = () => {

  const handleClick = () => {

  }

  return ( 
    <>
    <div className='main'> 
       <div className='main-description'>
      <h1>Build a job-winning resume for free</h1>
      <p>The ultimate resume site </p>
      <button onClick={handleClick}> Create Resume</button>
      </div>
    
      <div className='img-container'>
       <img src={Work}  alt='work'/>
      </div>
    </div>
    </>
  )
}

export default Home