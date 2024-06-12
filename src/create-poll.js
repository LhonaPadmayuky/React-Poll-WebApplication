import React, { useState } from 'react';
import CreatePollQ from './CreatePollQ';
import Heading from './Heading';


function CreatePoll() {
  const [isPollCreated, setPollCreated] = useState(false);
  const handlePollCreated = () => {
    setPollCreated(true);
    setTimeout(() => {
      setPollCreated(false);
    }, 5000); // Reset after 5 seconds
  };

  return (
    <div className='createpoll'>
      <Heading/>
      <CreatePollQ onPollCreated={handlePollCreated} />
      {/* <CreatePollQBtn/> */}
      {isPollCreated && <div className="success-message">Poll created successfully!</div>}
    </div>
  );
}

export default CreatePoll;


