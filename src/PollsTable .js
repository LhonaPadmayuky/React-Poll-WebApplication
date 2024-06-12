import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import './PollsTable.css';  
import Box from '@mui/material/Box';
import  LinearProgress  from '@mui/material/LinearProgress';

function PollsTable({ selectedTags }) {
  const [polls, setPolls] = useState([]);
  const [loading,setLoading]=useState(true)
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = selectedTags.length > 0 ? `?tags=${selectedTags.join(',')}` : '';
        const response = await fetch(`http://127.0.0.1:8000/polls/polls/${query}`);
        const json = await response.json();
        const data = json.data; 
        setPolls(data);
        console.log('Fetched polls:', data);
      } catch (error) {
        console.error('Error fetching polls:', error);
      }finally{
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTags]);

  if (loading) {
    return (
      <Box sx={{ width:'100%' }}>
        <LinearProgress/>
      </Box>
    );
  }

  const handlePollClick = (qid) => {
    navigate(`/poll-detail?id=${qid}`);
  };

  const columns = [
    { field: 'id', headerName: 'Number', flex: 1 },
    { 
      field: 'question', 
      headerName: 'Poll Question', 
      flex: 8, 
      renderCell: (params) => (
        <div className="wrap-cell" style={{ whiteSpace: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
          {params.value}
        </div>
      )
    },
    { field: 'totalVotes', headerName: 'Total Votes', flex: 3 },
    { field: 'tags', headerName: 'Tags', flex: 4 ,
      renderCell: (params) => (
        <div className="wrap-cell" style={{ whiteSpace: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
          {params.value}
        </div>
      )
      
    },
  ];

  const rows = polls.map((poll) => ({
    id: poll.QuestionId,
    question: poll.Question,
    totalVotes: Object.values(poll.OptionVote).reduce((a, b) => a + b, 0),
    tags: poll.Tags ? poll.Tags.join(', ') : 'No tags available',
  }));

  return (
    <div className='tablemain' style={{ marginLeft: '3%', width: '100%', height: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        onRowClick={(row) => handlePollClick(row.id)}
      />
    </div>
  );
}

export default PollsTable;
