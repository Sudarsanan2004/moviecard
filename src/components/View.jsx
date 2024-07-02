import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

// const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );
  

export const View = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        Assingment 2
      </Typography>
      <Typography variant="h5" component="div" style={{fontSize:'35px'}}>
        MONEY HEIST
      </Typography>
      <Typography sx={{ mb: 1.5 }} style={{fontSize:'11px'}}>
        Spanish|English
      </Typography>
      <Typography variant="body2">
        Language A,substance,Violence
        <br />
        {'"A Complete Heist in 6 Season"'}
      </Typography>
    </CardContent>
    <CardActions>
     <Link to={'/Next'}><Button size="small">more</Button></Link>
    </CardActions>
  </Card>
  )
}
