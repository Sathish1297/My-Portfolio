import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/home.css"

function Home() {

  return (
    <div className='home'>

      <div className='about'>
        <h2>Hi, My name is Sathish</h2>
        <div className='prompt'>
          <p>A Full Stack Developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        <ol className="list">

          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, NextJS, Recoil, Material-UI, HTML, CSS
            </span>
          </li>

          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MongoDB
            </span>
          </li>

          <li className='item'>
            <h2>Language</h2>
            <span>
              JavaScript, Java, TypeScript
            </span>
          </li>
          
        </ol>
      </div>

    </div>
  )
}

export default Home