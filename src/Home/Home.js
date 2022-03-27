import React from 'react';
import './Home.scss'
import { Link } from 'react-router-dom';
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
      <Link to='/resumepage'>
      <button onClick={handleClick}> Create Resume</button>
      </Link>
      </div>
    
      <div className='img-container'>
       <img src={Work}  alt='work'/>
      </div>
    </div>
    </>
  )
}

export default Home