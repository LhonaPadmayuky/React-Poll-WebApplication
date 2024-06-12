import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Heading from './Heading';
import PollVote from './PollVote';
import PollVoteBtn from './PollVoteBtn';

function Vote() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const pollId = queryParams.get('id');
  const { question, choices } = location.state || {};

  useEffect(() => {
    if (!pollId || !question || !choices) {
      navigate('/'); 
    }
  }, [navigate, pollId, question, choices]);

  const [selectedOption, setSelectedOption] = useState('');

  if (!pollId || !question || !choices) {
    return null; 
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Heading />
      <PollVote question={question} choices={choices} handleOptionChange={handleOptionChange} />
      <PollVoteBtn pollId={pollId} selectedOption={selectedOption} />
    </div>
  );
}

export default Vote;
