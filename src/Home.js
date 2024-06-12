import React from 'react';
import Heading from './Heading';
import SlideBar from './SlideBar';
import MainContent from './MainContent';
import { FilterProvider } from './FilterContext';
function Home() {
  return (
    <div className='home'>
          
          <Heading/>
          <FilterProvider>
            <div className='container'>
            <SlideBar/>
            <div className='wrapper'>
            <MainContent/>
            </div>
            </div>
         
          </FilterProvider>
    
    </div>
  );
}

export default Home;
