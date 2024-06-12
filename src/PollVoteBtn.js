import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';

const PollVoteBtn = ({ pollId, selectedOption }) => {
  const navigate = useNavigate();
  const [updatingVote, setUpdatingVote] = useState(false);

  const handleVote = async () => {
    if (!selectedOption) {
      alert('Please select an option before voting.');
      return;
    }

    try {
      // Start updating vote
      setUpdatingVote(true);

      const response = await fetch(`http://127.0.0.1:8000/polls/polls/${pollId}/update-vote/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ incrementOption: selectedOption }),
      });

      const result = await response.json();
      alert(result.msg);
      navigate('/'); // Navigate to home page after successful vote update
    } catch (error) {
      console.error('Error updating vote:', error);
      alert('Failed to update vote. Please try again.');
    } finally {
      // End updating vote
      setUpdatingVote(false);
    }
  };

  return (
    <Grid container >
      <Grid item xs={11} sm={8} md={6} lg={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleVote}
          disabled={updatingVote} // Disable button while vote is being updated
          sx={{
            fontSize: { xs: '12px', sm: '14px', md: '16px' },
            marginLeft: '5%',
            
          }}
        >
          {updatingVote ? 'Updating poll...' : 'Vote'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default PollVoteBtn;
