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
import IllustrationsContent from './IllustrationsContent';
import StructuresContent from './StructuresContent'

//renders the main app which includes the logo, title, navigation bar, and container where other page content is hidden or unhidden based on what the currPage is.
function App() {
  const [currPage, setCurrPage] = useState("home");
  const [tab, setTab] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  //this sets the window to be scrolled to the top of the page (x = 0 and y = 0) whenever the dependency variable currPage changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currPage]);

  //handles navigation tab changes by setting the tab value and the anchor variable. The tab state variable dictates which tab is currently selected and the anchorEl dictates where dropdown menus anchor to if applicable
  const handleChange = (event, newValue) => {
    setTab(newValue);
    setAnchorEl(event.currentTarget);
  };


  const open = Boolean(anchorEl);

  //handles clicks by navigating to new page content. This changes the currPage state variable.
  const handleClick = (event, pageID) => {
    setCurrPage(pageID);
    handleClose()
  };

  //sets dropdown menus into a closed state when this is called.
  const handleClose = () => {
    setAnchorEl(null);
  };

  //this defines the content and behavior of the dropdown menu when hovering over the Tools tab.
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
            <MenuItem onClick={() => window.location.href = 'https://gis.nacse.org/lichenair/index.php?page=cleansite'}>Element Analysis Thresholds & Sensitivity Ratings</MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    );
  }

  //this defines the content and behavior of the dropdown menu when hovering over the Other tab.
  function OtherMenu({open, anchorEl, handleClose, tab}) {
    return (
      <Popper
        anchorEl={anchorEl}
        open={open && tab === 5}
        placement={'bottom-start'}
      >
        <Paper>
          <MenuList onMouseLeave={handleClose}>
            <MenuItem onClick={() => window.location.href = 'https://gis.nacse.org/lichenair/index.php?page=lessons'}>Fun with Lichens and Air Quality</MenuItem>
            <MenuItem onClick={() => window.location.href = 'https://gis.nacse.org/lichenair/index.php?page=workgroup'}>Lichens and Air Quality Workgroup</MenuItem>
            <MenuItem onClick={() => window.location.href = 'https://gis.nacse.org/lichenair/index.php?page=links'}>Links to Other Resources</MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    );
  }

  //this defines the content and behavior of the dropdown menu when hovering over the Gallery tab.
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
            <MenuItem onClick={(event) => handleClick(event, "illustrations")}>Illustrations</MenuItem>
            <MenuItem onClick={(event) => handleClick(event, "structures")}>Lichen Structures</MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    );
  }

  return (
    //this is the main container for the website. It consists of the logo, title, navigation bar, and container for page content. Each tab on the navigation bar has event listeners that will change the current page content displayed inside the container. Each page and its behavior is defined in the src files.
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
            
              <img class='logo' src={usfsLogo} alt='logo' onClick={(event) => handleClick(event, "home")} style={{cursor: 'pointer'}}/>
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
          <Tab label="Reports" onMouseEnter={(event) => handleChange(event, 4)} onClick={() => window.location.href = 'https://gis.nacse.org/lichenair/index.php?page=reports'} sx={{fontSize: 18, fontWeight: 'bold'}}/>
          <Tab label="Other" icon={<ArrowDropDownIcon fontSize={'medium'}/>} iconPosition="end" onMouseEnter={(event) => handleChange(event, 5)} sx={{fontSize: 18, fontWeight: 'bold'}}/>
          <Tab label="Contact" onMouseEnter={(event) => handleChange(event, 6)} onClick={() => window.location.href = 'https://gis.nacse.org/lichenair/index.php?page=contacts'} sx={{fontSize: 18, fontWeight: 'bold'}}/>

          <ToolsMenu open={open} anchorEl={anchorEl} handleClose={handleClose} handleClick={handleClick} tab={tab}/>
          <OtherMenu open={open} anchorEl={anchorEl} handleClose={handleClose} tab={tab}/>
          <GalleryMenu open={open} anchorEl={anchorEl} handleClose={handleClose} handleClick={handleClick} tab={tab}/>

        </Tabs>
      </AppBar>
      <Container maxWidth='lg' sx={{marginY: 5}}>
        <HomeContent hidden={currPage !== "home"} onButtonClick={handleClick}/>
        <GalleryContent hidden={currPage !== "gallery"}/>
        <IllustrationsContent hidden={currPage !== "illustrations"}/>
        <StructuresContent hidden={currPage !== "structures"}/>
        <DBQueriesContent hidden={currPage !== "dbQueries"} onButtonClick={handleClick}/>
        <ElementContent hidden={currPage !== "elementAnalysis"}/>
        <AboutContent hidden={currPage !== "contact"}/>
        <TemplateContent hidden={currPage !== "reports"}/>
        <MapAppContent hidden={currPage !== "mapApp"} onButtonClick={handleClick}/>
        <ExplorationTool hidden={currPage !== "explorationTool"} onButtonClick={handleClick}/>
      </Container>
      <footer style={{opacity: 0}}>.</footer> {/* this is to get rid of the white footer but nothing should actually showup here */}
    </Box>
  );
}

export default App;
