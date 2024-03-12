import React from 'react'
import Layout from '../components/Layout'
import {Box, Typography} from '@mui/material';

const About = () => {
  return (
    
    <Layout>
        <Box 
        sx={{
          my:15,
          textAlign:'center',
          p:2,
          "& h4":{
            fontWeight:'bold',
            my:2,
            fontSize:'2rem',
          },
          "& p":{
            textAlign:'justify',
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:'1.5rem',
            },
          },
        }}
        >
        <Typography variant="h4">
           Welcome To Festive Resturant
        </Typography>
        <p sx={{"& h4":{
            fontWeight:'bold',
            my:2,
            fontSize:'2rem',
          }}} >
          Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, 
          and maintenance of body tissues and for the regulation of vital processes. 
          Nutrients provide the energy our bodies need to function.
        </p>
        <br/>
        <p>
        The energy in food is measured in units called calories. Age, sex, weight, height, and 
        level of activity determine the number of calories a person needs each day. Depending on age, sex,
         and activity level,the recommended daily caloric intake for a child aged 11 to 14 can range anywhere 
         from 1,600 to 2,600 calories per day,with sedentary girls needing the fewest calories and active boys needing the most.
         For adults, this can range from 1,800 to about 3,000.
        </p>
        </Box>
    </Layout>
  )
}

export default About