import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { data } from '../helpers/data';

export default function main() {
  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
     {data.map((product) => (
      <Card key={product.id} sx={{ maxWidth: 345, margin: "10px" }}>
       <CardMedia
        sx={{height: 300, width: 300 }}
        image={product.image}
        title={product.name}
       />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.price}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.name}
        </Typography>
       </CardContent>
       <CardActions>
        <Button size="small">В корзину</Button>
       </CardActions>
       </Card>      
     ))}
    </div>
  )
}