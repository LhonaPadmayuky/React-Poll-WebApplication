import React from 'react';
import { Grid, Radio, FormControlLabel, RadioGroup} from '@mui/material';

const PollVote = ({ question, choices, handleOptionChange }) => {
  return (
    <Grid container >
      <div className='q' style={{marginLeft:'4%'}}>
        <h1> {question}</h1>
      </div> 
      <Grid item xs={12} sm={10} md={8} lg={6}>
           
          <RadioGroup name="vote" onChange={handleOptionChange}style={{marginright:'50%',marginLeft:'4%'}}>
            {choices.map((choice, index) => (
              <FormControlLabel
                key={index}
                value={choice.option}
                control={<Radio />}
                label={choice.option}
                sx={{ marginBottom: '10px' }}
              />
            ))}
          </RadioGroup>
       
      </Grid>
    </Grid>
  );
};

export default PollVote;
