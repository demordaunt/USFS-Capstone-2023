import React from 'react';
import {Box, Container, Tabs, Tab, Typography, Menu, MenuItem, Popover, List, ListItem, ListItemText, ListItemButton, Item, Stack} from '@mui/material';
import HomeContent from './HomeContent';
import ElementContent from './ElementContent';
import AboutContent from './AboutContent';
import './App.css';
import usfsLogo from './images/usfs-logo.png'
import TemplateContent from './template';
import GalleryContent from './GalleryContent';

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
  
      <Box sx={{ bgcolor: '#95a984' }}>
        <Tabs sx={{background: '#5b8441'}} value={tab} onChange={handleChange} >
        <Stack
          justifyContent='flex-start'
          direction="row"
          spacing={2}
          marginTop={2}
          marginLeft={2}
          marginRight={8}
          marginBottom={2}
        >
          
            <img class='logo' src={usfsLogo} alt='logo'/>
            <Stack
            direction='column'
            >
              <Typography variant='h4' fontFamily='monospace'>United States Forest Service</Typography>
              <Typography variant='h6' >National Lichens & Air Quality Database and Clearinghouse</Typography>
            </Stack>
          
        </Stack>
        <Tab label="Home" value={0} onClick={handleClick} sx={{fontSize: 18, fontWeight: 'bold'}}/>
          <Tab label="Tools" value={1} onClick={handleClick} sx={{fontSize: 18, fontWeight: 'bold'}}/>
          <Tab label="Gallery" value={2} onClick={handleClick} sx={{fontSize: 18, fontWeight: 'bold'}}/>
          <Tab label="Reports" value={3} onClick={handleClick} sx={{fontSize: 18, fontWeight: 'bold'}}/>
          <Tab label="Other" value={4} onClick={handleClick} sx={{fontSize: 18, fontWeight: 'bold'}}/>
          <Tab label="Contact" value={5} onClick={handleClick} sx={{fontSize: 18, fontWeight: 'bold'}}/>
          <ToolsMenu open={open} anchorEl={anchorEl} handleClose={handleClose} tab={tab}/>
          <OtherMenu open={open} anchorEl={anchorEl} handleClose={handleClose} tab={tab}/>
        </Tabs>
        
        <Container maxWidth='lg' sx={{marginY: 5}}>
          <HomeContent hidden={tab !== 0}/>
          <GalleryContent hidden={tab !== 2}/>
          <ElementContent hidden={tab !== 1}/>
          <AboutContent hidden={tab !== 3}/>
          <TemplateContent hidden={tab !== 4}/>
        </Container>
        <footer style={{opacity: 0}}>.</footer> {/* this is to get rid of the white footer but nothing should actually showup here */}
        </Box>
     
  );
}

export default App;
