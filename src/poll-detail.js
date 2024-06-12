import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Heading from './Heading';
import PollQuestion from './PollQuestion';
import VotePollBtn from './VotePollBtn';
import PollQTable from './PollQTable';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';


function PollDetail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const qid = queryParams.get('id');
  const [poll, setPoll] = useState(null);

  useEffect(() => {
    const fetchPoll = async () => {
      if (qid) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/polls/polls/${qid}`);
          if (!response.ok) throw new Error('Failed to fetch poll');
          const data = await response.json();
          console.log('Fetched poll data:', data); 
          setPoll(data.data);
        } catch (error) {
          console.error('Error fetching poll:', error);
        }
      }
    };

    fetchPoll();
  }, [qid]);

  if (!poll) return(
    <Box sx={{ display: 'flex:6' }}>
      <LinearProgress />
    </Box>

  )



  const choices = Object.entries(poll.OptionVote).map(([option, votes]) => ({
    option,
    votes,
  }));

  console.log('Choices for PollQTable:', choices);

  return (
    <div className='polldetail'>
      <Heading />
      <PollQuestion question={poll.Question} />
      <VotePollBtn qid={qid} question={poll.Question} choices={choices} />
      <PollQTable choices={choices} />
    </div>
  );
}

export default PollDetail;
