import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from "@mui/material";
import { Grid } from '@mui/material'; 

function CreatePollBtn() {
  const navigate = useNavigate();
  return (
    <Grid> 
      <Grid item xs={11} sm={8} md={6} lg={4}> 
      <div className="createpollbtn">
        <br/>
        <Button variant="contained" color="primary" onClick= {() => navigate('/create-poll')} style={{marginLeft:'4%',width:'100%',padding:'4%'}}>Create Poll</Button>
        <br/>
        <br/>  
      </div>
      </Grid>
    </Grid>

  );
  
}


export default CreatePollBtn;