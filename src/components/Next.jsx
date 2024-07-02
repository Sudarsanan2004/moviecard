import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const Next = () => {

    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/src/assets/money.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          "Episode 1"
        </Typography>
        <Typography variant="body2" color="text.secondary">
         The Professor recruits a young female robber and seven other criminals for a grand heist,targeting the Royal Mint of Spain
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">back</Button>
        <Button size="small">episode</Button>
      </CardActions>
      <button style={{color:'red'}} >Watch Now</button>
      
    </Card>
  )
}

