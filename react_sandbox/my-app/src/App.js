import React from 'react';
import {Box, Container, Tabs, Tab, Typography} from '@mui/material';
import HomeContent from './HomeContent';
import ElementContent from './ElementContent';

function App() {
  const [tab, setTab] = React.useState(0);

  const tabs = ['Home', 'Database Queries', 'Element Analysis Thresholds & Sensitivity Ratings'].map((t) => <Tab label={t}/>);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Container maxWidth='xl'>
      <Typography variant='h4'>United States Forest Service</Typography>
      <Typography variant='h6'>National Lichens & Air Quality Database and Clearinghouse</Typography>
      <Tabs sx={{background: '#95a984'}} value={tab} onChange={handleChange}>
        {tabs}
      </Tabs>
      <Container maxWidth='lg' sx={{marginY: 5}}>
        <Typography>{`Tab ${tab} selected`}</Typography>
        <HomeContent hidden={tab !== 0}/>
        <ElementContent hidden={tab !== 2}/>
        <Box hidden={tab !== 1}>Something</Box>
      </Container>
    </Container> 
  );
}

export default App;
