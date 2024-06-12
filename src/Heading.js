import React from 'react';
import { Grid } from '@mui/material'; 

function Heading() {
  return (
    <Grid> 
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <div className="heading" style={{ 
          textAlign: 'left',
          backgroundColor: 'lightblue',
          padding:'2.5vw', 
          fontFamily:'serif', 
          margin:'5px',
          width:'100%',
          marginRight:'0%'
        }}>
          <h1>FlyWeight Polls</h1>   
        </div>
      </Grid>
    </Grid>
  );
}

export default Heading;
