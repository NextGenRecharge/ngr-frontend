// Layout.js
import React from 'react';
import { Box, CssBaseline, Toolbar, AppBar, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import UserMenu from './UserMenu';

const Layout = ({ children, user, onMenuClick }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            Recharge
          </Typography>
          <UserMenu user={user} />
        </Toolbar>
      </AppBar>
      <Sidebar onMenuClick={onMenuClick} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
