import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
function AppNav() {
  return (
    <AppBar position="static" sx={{ background:'#fff' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ backgroundColor: '#7B5AFF', color: 'white', padding: '0 10px'}}>LOGO</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          {/* Buttons */}
          <Button color="inherit" 
            sx={{
              backgroundColor: '#7B5AFF',
              padding: '6.4px 15px',
              borderRadius: '999px',
              marginRight: '10px' 
            }}
          >Feedback</Button>
           {/* Icons */}
           <IconButton color="000">
          <NotificationsNoneIcon />
          </IconButton>
          <IconButton color="#000" >
            <InfoOutlinedIcon />
          </IconButton>
         <Avatar alt="Masuma Jaffery" src="/static/images/avatar/3.jpg" />
         <IconButton color="#000" >
         <ExpandMoreOutlinedIcon />
         </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppNav;
