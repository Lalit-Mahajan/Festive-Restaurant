import React from 'react'
import Layout from '../components/Layout'
import {Box,Typography} from '@mui/material';



const Pagenotfound = () => {
  return (
    <Layout>
          <Box sx={{my:5, ml:10, "& h4":{fontWeight:'bold', mb:1}}}>
          <Typography color={'goldenrod'} variant="h2" align='center' fontWeight='bold' mb={2}>
          <h1>Pagenotfound Page</h1>
          </Typography>
          <Box
           sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            
           }}
          />
        </Box>
        {/* <p><h1>Pagenotfound Page</h1></p> */}
    </Layout>
  )
}

export default Pagenotfound