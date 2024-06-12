import React, { useState, useEffect, useContext } from 'react';
import { FilterContext } from './FilterContext';
import { Button, Grid, Box, FormGroup, FormControlLabel, Checkbox} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

function Filter() {
  const { updateSelectedTags } = useContext(FilterContext);
  const [tags, setTags] = useState([]);
  const [tempSelectedTags, setTempSelectedTags] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/polls/polls/list-tags/');
      if (!response.ok) throw new Error('Failed to fetch tags');
      const data = await response.json();
      setTags(data.Tags);
    } catch (error) {
      console.error('Error fetching tags:', error);
    } finally {
      setLoading(false); 
    }
  };

  const handleTagChange = (tag) => {
    setTempSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const handleFilterClick = () => {
    updateSelectedTags(tempSelectedTags);
  };

  if (loading) {
    return (
      <Box sx={{ marginLeft:'1%',width:'100%' }}>
        <LinearProgress/>
      </Box>
    );
  }

  return (
    <Grid item xs={11} sm={8} md={6} lg={4}>
      <Box
        className="filter"
        sx={{
          backgroundColor: 'lightblue',
          width: '98%',
          height: '100%',
          paddingLeft:'12px',
          marginLeft:'4%',
          
          '@media screen and (max-width: 800px)': {
            marginBottom: '20px',
            width: '95%',
            height: '100%',
            paddingLeft:'12px',
            paddingBottom:'16px'
            
            

          },
        }}
      >
        <Box component="br" />
        <FormGroup>
          {tags.map((tag) => (
            <FormControlLabel
              key={tag}
              control={
                <Checkbox
                  checked={tempSelectedTags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                  
                />
              }
              label={tag}
            />
          ))}
        </FormGroup>
        <Box component="br" />
        <Button variant="contained" color="secondary" onClick={handleFilterClick} sx={{ width: '97%' }}> 
          Filter by Tags
        </Button>
        
      </Box>
    </Grid>
  );
}

export default Filter;
