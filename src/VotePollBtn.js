import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Button,Grid} from '@mui/material';

const VotePollBtn = ({ qid, question, choices }) => {
  const navigate = useNavigate();
  
  const handleVote = () => {
    navigate(`/vote?id=${qid}`, { state: { pollId: qid, question, choices } });
  };

  return (
    <div className='votepollbtn'>
      <Grid item xs={11} sm={8} md={6} lg={4}>
        
        <Button variant="contained" color="primary" onClick={handleVote} 
        sx={{
            fontSize: { xs: '12px', sm: '14px', md: '16px' },
            marginLeft: '4%',
            
          }}>Vote on this Poll</Button>
        </Grid>
      <br/>
    </div>
  );
};

export default VotePollBtn;
