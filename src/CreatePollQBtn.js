import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

function CreatePollQBtn({ pollData }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false); // State to control button disabled state

  const handleSubmit = async () => {
    setLoading(true);
    setButtonDisabled(true); // Disable the button when submitting
    try {
      const response = await fetch('http://127.0.0.1:8000/polls/polls/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pollData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error:', errorText);
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      setOpen(true);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setButtonDisabled(false); // Enable the button when Snackbar is closed
    navigate('/'); // Navigate to '/' when Snackbar is closed
  };

  return (
    <div className='createpollqbtn'>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginLeft: '3%', width: '70%' }}
        disabled={loading || buttonDisabled} // Disable based on loading state or buttonDisabled state
      >
        {loading ? 'Creating Poll...' : 'Create Poll'}
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Poll Created Successfully
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default CreatePollQBtn;
