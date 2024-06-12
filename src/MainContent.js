import React, { useContext } from 'react';
import PollsTable from './PollsTable '; 
import { FilterContext } from './FilterContext';

function MainContent() {
  const { selectedTags } = useContext(FilterContext);

  return (
    <div className='maincontent'>
      
      <PollsTable selectedTags={selectedTags} />
    </div>
  );
}

export default MainContent;
