import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// call facts from factbutton
function Factcard({facts}) {
    console.log(facts);
    
const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 25 }}>
        Facts of the Day
      </Typography>
    
      <Typography variant="h5">
        {/* display the value here */}
         {facts} 
      </Typography>
    </CardContent>
  </React.Fragment>
);
  return (
    <div className='text-center'>
       <Box sx={{ minWidth: 275, alignItems:'center' }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    </div>
  )
}

export default Factcard
