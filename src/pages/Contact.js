import React, { useState } from 'react'
import Layout from '../components/Layout'
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {Box,Paper, Table,TableCell, TableBody, TableContainer,TableHead,TableRow,Typography, TextField, Button} from '@mui/material';


const Contact = () => {

  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [message, setMessage]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert('submited')
  }

  return (
    <Layout>
        <Box sx={{my:5, ml:10, "& h4":{fontWeight:'bold', mb:1}}}>
          <Typography color={'goldenrod'} variant="h2" align='center' fontWeight='bold' mb={2}>
            🏨Contact Festive Resturant🏨
          </Typography>
          <Box
           sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            
           }}
          >
            <Box sx={{mx:'auto', p:0, ml:2, mr:2}}>
              <Typography variant='h4' align='center' mb={2}>
                Contact Us ☎️
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                fullWidth label='Name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                margin='normal'
                required type='name'
                />
                <TextField
                 fullWidth label='Email'
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                 margin='normal'
                 required type='email'
                />
                <TextField
                 fullWidth label='Message'
                 value={message}
                 onChange={(e)=>setMessage(e.target.value)}
                 margin='normal'
                 required multiline rows={4}
                />
                <Button variant='contained' type='submit' sx={{mt:2}}>
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
        <Box
       sx={{ p:2, 
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            m:5,
            width: "600px",
            ml:5,
            "@media (max-width:600px)": {
              width: "300px",
            },
            
      }}
        >
          <TableContainer component={Paper}>
             <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                  sx={{
                    bgcolor:"black", color:"white"
                  }}
                  align="center"
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color: 'red', pt:1}}/> 1800-00-0000
                    (tollfree)
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <MailIcon sx={{color: 'skyblue', pt:1}}/>help@myrest.com
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: 'green',pt:1}}/> 1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
             </Table>
          </TableContainer>

        </Box>
    </Layout>
  )
}

export default Contact