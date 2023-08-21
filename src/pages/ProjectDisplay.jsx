import { GitHub } from '@mui/icons-material';
import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/projectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/projectDisplay.css"


function ProjectDisplay() {

    const { id } = useParams();
    const project = projectList[id];

  return (
    <div className='project'>
        <h1> {project.name} </h1>
        <img src = {project.image} />
        <p>
            <b> Skills: </b> {project.skills}
        </p>
        <GitHubIcon />
    </div>
  )
}

export default ProjectDisplay