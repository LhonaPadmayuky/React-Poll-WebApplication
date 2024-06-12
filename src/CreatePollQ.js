import React, { useState } from 'react';
import CreatePollQBtn from './CreatePollQBtn';
import { Button, IconButton, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function CreatePollQ() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [tags, setTags] = useState('');

  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const handleDeleteOption = (index) => {
    if (index >= 2) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  const pollData = {
    Question: question,
    OptionVote: options.reduce((acc, option) => {
      if (option) acc[option] = 0;
      return acc;
    }, {}),
    Tags: tags.split(',').map(tag => tag.trim()),
  };

  return (
    <div className='createpollq'>
      <div className='headingq'style={{paddingTop:'2px'}} >
        
        <h2>Question</h2>
      </div>
      <TextField
        id="outlined-required"
        label="Type your Poll Question here"
        variant="standard"
        size="small"
        required
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: '70%', marginLeft: '3%' }}
      />
      <div className='answopt'>
        <h2>Answer Options</h2>
      </div>
      {options.map((option, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <TextField
            size="small"
            label={`Option ${index + 1}`}
            value={option}
            onChange={(event) => handleOptionChange(index, event)}
            style={{ width: '70%', marginLeft: '3%' }}
          />
          {index >= 2 && (
            <IconButton onClick={() => handleDeleteOption(index)} style={{ color: 'red' }}>
              <ClearIcon />
            </IconButton>
          )}
        </div>
      ))}
      <Button
        variant="contained"
        color="secondary"
        onClick={addOption}
        style={{ width: '70%', marginLeft: '3%', marginTop: '8px' }}
      >
        Add Option
      </Button>
      <div className='commaseptags'>
        <h2>Comma separated tags</h2>
      </div>
      <TextField
        size="small"
        label='Tag1,Tag2,Tag3'
        value={tags}
        onChange={handleTagsChange}
        style={{ width: '70%', marginLeft: '3%' }}
      />
      <br></br>
      <br></br>
      
      
      <CreatePollQBtn pollData={pollData} />
    </div>
  );
}

export default CreatePollQ;
