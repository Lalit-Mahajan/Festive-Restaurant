import React from 'react'
import {Box, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
 
const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:'center', 
      color:'white',
      bgcolor:"#1A1A19", p:3
      }}>
        <Box sx={{my:3,
        "& svg":{
            fontSize:'60px',
            cursor:'pointer',
            mr:2,
        },
        "& svg:hover":{
           color:"gold",
           transform:"translatex(5px)",
           transition:"all 400ms",
        }
        }}>
            <InstagramIcon/>
            <LinkedInIcon/>
            <GitHubIcon/>
            <YouTubeIcon/>
        </Box>
        <Typography variant="h5"
        sx={{"@media (max-width:600px)":{
            fontSize:'1rem'
        }}}
        >
            All Rights Reserved &copy;
        </Typography>
      </Box>
    </>
  )
}

export default Footer