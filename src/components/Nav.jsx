import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import '../styles/appBar.css';

export default function NavBar() {

  // const menuIcon = () => {
  //   console.log("This was clicked")
  // }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className='navBar' style={{boxShadow: 'none'}}>
          <Toolbar style={{backgroundColor: 'white', height: "80px"}}>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              style={{color: "black"}}
            >
              <MenuIcon  onClick={menuIcon}/>
            </IconButton> */}
            <Typography className='headName' variant="h6" component="div" sx={{ flexGrow: 1 }} 
              style={{color: "black", textAlign: "Center", fontSize: '1.6rem', fontWeight: '600'}}>
              Chance Lamberth
            </Typography>
            {/* <Button color="inherit" style={{color: "black", fontSize: '1.0rem', fontFamily: "Arial"}}>Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </div>

    
  );
}
