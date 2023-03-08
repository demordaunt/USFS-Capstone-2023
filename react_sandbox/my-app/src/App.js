import React from 'react';
import {Box, Container, Tabs, Tab, Typography, Menu, MenuItem, Popover, List, ListItem, ListItemText, ListItemButton, styled} from '@mui/material';
import HomeContent from './HomeContent';
import ElementContent from './ElementContent';
import AboutContent from './AboutContent';
import './App.css';

function App() {
  const [tab, setTab] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function ToolsMenu({open, anchorEl, handleClose, tab}) {
    return (
      <Menu
        anchorEl={anchorEl}
        open={open && tab === 1}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Database Queries</MenuItem>
        <MenuItem onClick={handleClose}>Element Analysis Thresholds & Sensitivity Ratings</MenuItem>
      </Menu>
    );
  }
  function OtherMenu({open, anchorEl, handleClose, tab}) {
    return (
      <Menu
        anchorEl={anchorEl}
        open={open && tab === 4}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Fun with Lichens and Air Quality: Projects & Ideas</MenuItem>
        <MenuItem onClick={handleClose}>Lichens and Air Quality Workgroup</MenuItem>
        <MenuItem onClick={handleClose}>Links to Other Resources</MenuItem>
      </Menu>
    );
  }

  return (
    <Container maxWidth='xl'>
      <Typography variant='h4'>United States Forest Service</Typography>
      <Typography variant='h6'>National Lichens & Air Quality Database and Clearinghouse</Typography>
      <Tabs sx={{background: '#95a984'}} value={tab} onChange={handleChange} centered>
      <Tab label="Home" value={0} onClick={handleClick}/>
        <Tab label="Tools" value={1} onClick={handleClick}/>
        <Tab label="Gallery" value={2} onClick={handleClick}/>
        <Tab label="Reports" value={3} onClick={handleClick}/>
        <Tab label="Other" value={4} onClick={handleClick}/>
        <Tab label="Contact" value={5} onClick={handleClick}/>
        <ToolsMenu open={open} anchorEl={anchorEl} handleClose={handleClose} tab={tab}/>
        <OtherMenu open={open} anchorEl={anchorEl} handleClose={handleClose} tab={tab}/>
      </Tabs>
      <Container maxWidth='lg' sx={{marginY: 5}}>
        <HomeContent hidden={tab !== 0}/>
        <ElementContent hidden={tab !== 2}/>
        <AboutContent hidden={tab !== 3}/>
      </Container>
    </Container> 
  );
}

export default App;
