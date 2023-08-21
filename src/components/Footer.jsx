import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/footer.css"


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon />
            <InstagramIcon />
            <FacebookIcon /> 
        </div>
        <p> &copy; 2023</p>
    </div>
  )
}

export default Footer