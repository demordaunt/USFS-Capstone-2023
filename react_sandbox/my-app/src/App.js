import React from 'react';
import {Box, Container, Tabs, Tab, Typography, Menu, MenuItem, Popover, List, ListItem, ListItemText, ListItemButton, Item, Stack} from '@mui/material';
import React, { useState } from 'react';
import {Box, Container, Tabs, Tab, Typography, Menu, MenuItem, MenuList, Stack, AppBar, Popper, Paper} from '@mui/material';
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

  const [currPage, setCurrPage] = useState("home");
  const [tab, setTab] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event, newValue) => {
    setTab(newValue);
    setAnchorEl(event.currentTarget);
    console.log(newValue);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  const handleClick = (event, pageID) => {
    setCurrPage(pageID);
    handleClose()
    console.log(currPage)
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log(open);
  };
  function ToolsMenu({open, anchorEl, handleClose, tab}) {

  function ToolsMenu({open, anchorEl, handleClose, handleClick, tab}) {
    return (
      <Menu
      <Popper
        anchorEl={anchorEl}
        open={open && tab === 1}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Database Queries</MenuItem>
        <MenuItem onClick={handleClose}>Element Analysis Thresholds & Sensitivity Ratings</MenuItem>
      </Menu>
        open={open && tab === 2}
        placement={'bottom-start'}
        // autoFocus={false}
        >
        <Paper>
          <MenuList onMouseLeave={handleClose}>
            <MenuItem onClick={handleClose}>Database Queries</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "elementAnalysis")}>Element Analysis Thresholds & Sensitivity Ratings</MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    );
  }

  function OtherMenu({open, anchorEl, handleClose, tab}) {
    return (
      <Menu
      <Popper
        anchorEl={anchorEl}
        open={open && tab === 4}
        onClose={handleClose}
        open={open && tab === 5}
        placement={'bottom-start'}
        // autoFocus={false}
      >
        <MenuItem onClick={handleClose}>Fun with Lichens and Air Quality: Projects & Ideas</MenuItem>
        <MenuItem onClick={handleClose}>Lichens and Air Quality Workgroup</MenuItem>
        <MenuItem onClick={handleClose}>Links to Other Resources</MenuItem>
      </Menu>
        <Paper>
          <MenuList onMouseLeave={handleClose}>
            <MenuItem onClick={handleClose}>Fun with Lichens and Air Quality</MenuItem>
            <MenuItem onClick={handleClose}>Lichens and Air Quality Workgroup</MenuItem>
            <MenuItem onClick={handleClose}>Links to Other Resources</MenuItem>
          </MenuList>
        </Paper>
      </Popper>
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
      <Box onMouseLeave={handleClose} sx={{ bgcolor: '#95a984' }}>
        <AppBar position={'relative'}>
          <Tabs sx={{background: '#5b8441'}} value={tab} onChange={handleChange}>
            <Stack
            direction='column'
              justifyContent='flex-start'
              direction="row"
              spacing={2}
              marginTop={2}
              marginLeft={2}
              marginRight={8}
              marginBottom={2}
            >
              <Typography variant='h4' fontFamily='monospace'>United States Forest Service</Typography>
              <Typography variant='h6' >National Lichens & Air Quality Database and Clearinghouse</Typography>
              
                <img class='logo' src={usfsLogo} alt='logo'/>
                <Stack
                direction='column'
                >
                  <Typography variant='h4' fontFamily='monospace'>United States Forest Service</Typography>
                  <Typography variant='h6' >National Lichens & Air Quality Database and Clearinghouse</Typography>
                </Stack>
              
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
        
            <Tab label="Home" onMouseEnter={(event) => handleChange(event, 1)} onClick={(event) => handleClick(event, "home")} sx={{fontSize: 18, fontWeight: 'bold'}}/>
            <Tab label="Tools" onMouseEnter={(event) => handleChange(event, 2)} sx={{fontSize: 18, fontWeight: 'bold'}}/>
            <Tab label="Gallery" onMouseEnter={(event) => handleChange(event, 3)} onClick={(event) => handleClick(event, "gallery")} sx={{fontSize: 18, fontWeight: 'bold'}}/>
            <Tab label="Reports" onMouseEnter={(event) => handleChange(event, 4)} sx={{fontSize: 18, fontWeight: 'bold'}}/>
            <Tab label="Other" onMouseEnter={(event) => handleChange(event, 5)} sx={{fontSize: 18, fontWeight: 'bold'}}/>
            <Tab label="Contact" onMouseEnter={(event) => handleChange(event, 6)} onClick={(event) => handleClick(event, "contact")} sx={{fontSize: 18, fontWeight: 'bold'}}/>
            {/* <Tab label="Test" value={"test"} onClick={handleClick} sx={{fontSize: 18, fontWeight: 'bold'}}/> */}

            <ToolsMenu open={open} anchorEl={anchorEl} handleClose={handleClose} handleClick={handleClick} tab={tab}/>
            <OtherMenu open={open} anchorEl={anchorEl} handleClose={handleClose} tab={tab}/>
          </Tabs>
        </AppBar>
        <Container maxWidth='lg' sx={{marginY: 5}}>
          <HomeContent hidden={tab !== 0}/>
          <ElementContent hidden={tab !== 2}/>
          <AboutContent hidden={tab !== 3}/>
          <TemplateContent hidden={tab !== 4}/>
          <HomeContent hidden={currPage !== "home"}/>
          <GalleryContent hidden={currPage !== "gallery"}/>
          <ElementContent hidden={currPage !== "elementAnalysis"}/>
          <AboutContent hidden={currPage !== "contact"}/>
          <TemplateContent hidden={currPage !== 4}/>
          {/* <Box hidden={tab !== 5}>Contact content goes here.</Box>
          <Box hidden={tab !== 6}>database queries page</Box> */}
        </Container>
        <footer style={{opacity: 0}}>.</footer> {/* this is to get rid of the white footer but nothing should actually showup here */}
        </Box>
     
      </Box>
  );
}

export default App;
