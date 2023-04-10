import React, { useState, useEffect } from 'react';
import {Box, Container, Tabs, Tab, Typography, Menu, MenuItem, MenuList, Stack, AppBar, Popper, Paper} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './App.css';
import HomeContent from './HomeContent';
import ElementContent from './ElementContent';
import AboutContent from './AboutContent';
import usfsLogo from './images/usfs-logo.png'
import TemplateContent from './template';
import GalleryContent from './GalleryContent';
import DBQueriesContent from './DBQueriesContent'
import MapAppContent from './MapAppContent'
import ExplorationTool from './ExplorationTool';

function App() {
  const [currPage, setCurrPage] = useState("home");
  const [tab, setTab] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currPage]);

  const handleChange = (event, newValue) => {
    setTab(newValue);
    setAnchorEl(event.currentTarget);
    console.log(newValue);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event, pageID) => {
    setCurrPage(pageID);
    handleClose()
    console.log(currPage)
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log(open);
  };

  function ToolsMenu({open, anchorEl, handleClose, handleClick, tab}) {
    return (
      <Popper
        anchorEl={anchorEl}
        open={open && tab === 2}
        placement={'bottom-start'}
        >
        <Paper>
          <MenuList onMouseLeave={handleClose}>
            <MenuItem onClick={(event) => handleClick(event, "dbQueries")}>Database Queries</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "elementAnalysis")}>Element Analysis Thresholds & Sensitivity Ratings</MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    );
  }

  function OtherMenu({open, anchorEl, handleClose, tab}) {
    return (
      <Popper
        anchorEl={anchorEl}
        open={open && tab === 5}
        placement={'bottom-start'}
      >
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

  function GalleryMenu({open, anchorEl, handleClose, handleClick, tab}) {
    return (
      <Popper
        anchorEl={anchorEl}
        open={open && tab === 3}
        placement={'bottom-start'}
      >
        <Paper>
          <MenuList onMouseLeave={handleClose}>
            <MenuItem onClick={(event) => handleClick(event, "gallery")}>Photographs</MenuItem>
            <MenuItem onClick={handleClose}>Illustrations</MenuItem>
            <MenuItem onClick={handleClose}>Lichen Structures</MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    );
  }

  return (
  
      <Box onMouseLeave={handleClose} sx={{ bgcolor: '#95a984' }}>
        <AppBar position={'relative'}>
          <Tabs sx={{background: '#5b8441'}} value={tab} onChange={handleChange}>
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
            <Tab label="Home" onMouseEnter={(event) => handleChange(event, 1)} onClick={(event) => handleClick(event, "home")} sx={{fontSize: 18, fontWeight: 'bold'}}/>
            <Tab label="Tools" icon={<ArrowDropDownIcon fontSize={'medium'}/>} iconPosition="end" onMouseEnter={(event) => handleChange(event, 2)} sx={{fontSize: 18, fontWeight: 'bold'}}/>
            <Tab label="Gallery" icon={<ArrowDropDownIcon fontSize={'medium'}/>} iconPosition="end" onMouseEnter={(event) => handleChange(event, 3)} sx={{fontSize: 18, fontWeight: 'bold'}}/>
            <Tab label="Reports" onMouseEnter={(event) => handleChange(event, 4)} onClick={(event) => handleClick(event, "reports")} sx={{fontSize: 18, fontWeight: 'bold'}}/>
            <Tab label="Other" icon={<ArrowDropDownIcon fontSize={'medium'}/>} iconPosition="end" onMouseEnter={(event) => handleChange(event, 5)} sx={{fontSize: 18, fontWeight: 'bold'}}/>
            <Tab label="Contact" onMouseEnter={(event) => handleChange(event, 6)} onClick={(event) => handleClick(event, "contact")} sx={{fontSize: 18, fontWeight: 'bold'}}/>
            {/* <Tab label="Test" value={"test"} onClick={handleClick} sx={{fontSize: 18, fontWeight: 'bold'}}/> */}

            <ToolsMenu open={open} anchorEl={anchorEl} handleClose={handleClose} handleClick={handleClick} tab={tab}/>
            <OtherMenu open={open} anchorEl={anchorEl} handleClose={handleClose} tab={tab}/>
            <GalleryMenu open={open} anchorEl={anchorEl} handleClose={handleClose} handleClick={handleClick} tab={tab}/>

          </Tabs>
        </AppBar>
        <Container maxWidth='lg' sx={{marginY: 5}}>
          <HomeContent hidden={currPage !== "home"} onButtonClick={handleClick}/>
          <GalleryContent hidden={currPage !== "gallery"}/>
          <DBQueriesContent hidden={currPage !== "dbQueries"} onButtonClick={handleClick}/>
          <ElementContent hidden={currPage !== "elementAnalysis"}/>
          <AboutContent hidden={currPage !== "contact"}/>
          <TemplateContent hidden={currPage !== "reports"}/>
          <MapAppContent hidden={currPage !== "mapApp"} onButtonClick={handleClick}/>
          <ExplorationTool hidden={currPage !== "explorationTool"} onButtonClick={handleClick}/>

          {/* <Box hidden={tab !== 5}>Contact content goes here.</Box>
          <Box hidden={tab !== 6}>database queries page</Box> */}
        </Container>
        <footer style={{opacity: 0}}>.</footer> {/* this is to get rid of the white footer but nothing should actually showup here */}
      </Box>
  );
}

export default App;
