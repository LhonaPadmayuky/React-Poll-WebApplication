import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const updateSelectedTags = (tags) => {
    setSelectedTags(tags);
  };

  return (
    <FilterContext.Provider value={{ selectedTags, updateSelectedTags }}>
      {children}
    </FilterContext.Provider>
  );
};

