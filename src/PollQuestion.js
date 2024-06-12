import React from 'react';

const PollQuestion = ({ question }) => {
  return (
    <div className='pollquestion' style={{marginLeft:'4%'}}>
      <h1>{question}</h1>
      
    </div>
    
  );
};

export default PollQuestion;
