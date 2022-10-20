import React from "react";
// import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import "./syle.css"

const Dashboards = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
    
  };
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:'white',width:'82%',marginLeft:'18rem',position:'absolute',top:0}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'black',fontSize:'1rem' }}>
          Welcome to C-Cash Dashboard
          </Typography>
          {/* <Button color="inherit" sx={{color:'black'}}>Fabiola</Button> */}
        </Toolbar>
        
      </AppBar>
    
    </Box>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '95vh',width:'1000px' }} />
      </Container>
    </React.Fragment>
    
    
    <List
      sx={{ width: "100%", maxWidth: 293, bgcolor: "#476847", height:'96vh',position:'absolute',bottom:'2rem',marginTop:'2rem' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Nested List Items
      //   </ListSubheader>
      // }
    >
      <ListItemButton sx={{ color: "white" }}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="" />
      </ListItemButton>
      <ListItemButton sx={{ color: "white" }}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton sx={{ color: "white" }}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Manager Users" />
      </ListItemButton>
      <ListItemButton onClick={handleClick} sx={{ color: "white" }}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Accountability" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>

        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, color: "white" }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Manage report" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton sx={{ color: "white" }}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Messaging" />
      </ListItemButton >
      
      <ListItemButton sx={{ color: "white",marginTop:'20rem',paddingTop:'6rem' }}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </List>
    </>
  );
};
export default Dashboards;
