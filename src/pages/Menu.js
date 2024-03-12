import React from 'react'
import Layout from '../components/Layout'
import {Box,Card,CardActionArea,CardContent,CardMedia,Typography} from '@mui/material';
import { MenuList } from '../data/data';


const Menu = () => {
  return (
    <Layout>
      <Box sx={{my:5, ml:10, "& h4":{fontWeight:'bold', mb:1}}}>
          <Typography color={'black'} variant="h4" align='center' fontWeight='bold' mb={2}>
            Menu List 🤤
          </Typography>
      </Box>    
     <Box 
      sx={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center'
      }}
     >
      {MenuList.map((menu)=>(
        <Card sx={{maxWidth:'390px',display:'flex',m:2}}>
          <CardActionArea>
            <CardMedia
            sx={{ minHeight:'390px'}}
            component={"img"}
            src={menu.image}
            alt={menu.name}
            />
            <CardContent>
              <Typography variant='h5' gutterBottom component={'div'}>
               {menu.name}
              </Typography>
              <Typography variant='body2'>
                {menu.description}
              </Typography>
              <Typography variant='body2'>
                {menu.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
       
     </Box>
    </Layout>
  )
}

export default Menu