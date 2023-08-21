import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProjectItem({name, image, id}) {
  const navigate = useNavigate();
  return (
    <div className='projectItem' onClick={() => navigate("/projects/"+ id)}>
        <div className='bgImage' style={{backgroundImage: `url(${image})`}} />
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem;