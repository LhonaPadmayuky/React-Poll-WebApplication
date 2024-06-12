import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Grid } from '@mui/material';

const PollQTable = ({ choices }) => {
  if (!Array.isArray(choices)) {
    return <div>No data available</div>;
  }

  const columns = [
    { field: 'id', headerName: 'Number', flex: 1, headerClassName: 'bold-header' },
    { field: 'option', headerName: 'Option', flex: 2, headerClassName: 'bold-header' },
    { field: 'votes', headerName: 'Votes', flex: 1, headerClassName: 'bold-header' },
  ];

  const rows = choices.map((choice, index) => ({
    id: index + 1,
    option: choice.option,
    votes: choice.votes,
  }));

  return (
    <Grid container  style={{ padding: '15px' ,marginLeft:'1%'}}>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Box sx={{ height: 330, width: '100%' }}>
          <DataGrid 
            rows={rows} 
            columns={columns} 
            headerHeight={56}
            rowHeight={52}
            pageSize={4}
            
           
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default PollQTable;
