import { AppBar, Button, IconButton, Toolbar, Typography, Box, Menu, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import octotechlogo from './images/octotechlogo-modified.png';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { auth } from './firebase';
import './Navbar.css';

function DashboardNavbar({ presentUser }) {
  const settings = [`${presentUser.firstname} ${presentUser.lastname}`, presentUser.email];
  const [anchorNav, setAnchorNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const location = useLocation();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const openMenu = (e) => {
    setAnchorNav(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log('Sign out successful');
      alert('Logout Successfully');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#1e1e1e', padding: '0 10px' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: 'none', md: 'flex' }, color: '#f50057' }}
          >
            <Box
              component="img"
              src={octotechlogo}
              alt="Octotech Logo"
              sx={{ height: 30, width: 30 }} // Adjust size as needed
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, fontFamily: 'Orbitron, sans-serif', color: '#f50057' }}
          >
            OCTOTECH
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button
              component={NavLink}
              to="/dashboard"
              className={location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}
              sx={{ color: '#f50057' }}
            >
              Dashboard
            </Button>
            <Button
              component={NavLink}
              to="/alltemplates"
              className={location.pathname === "/alltemplates" ? "nav-link active" : "nav-link"}
              sx={{ color: '#f50057' }}
            >
              All Templates
            </Button>
            <Button
              component={NavLink}
              to="/apply"
              className={location.pathname === "/apply" ? "nav-link active" : "nav-link"}
              sx={{ color: '#f50057' }}
            >
              Apply
            </Button>



            <Button
              component={NavLink}
              to="/"
              className={location.pathname === "/" ? "nav-link active" : "nav-link"}
              sx={{ color: '#f50057' }}
              onClick={handleSignOut}
            >
              Logout
            </Button>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>
                    {presentUser.firstname ? presentUser.firstname.charAt(0).toUpperCase() : 'U'}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <IconButton size="large" edge="start" color="inherit" onClick={openMenu}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontFamily: 'Orbitron, sans-serif', color: '#f50057' }}
            >
              DASHBOARD
            </Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>
                  {presentUser.firstname ? presentUser.firstname.charAt(0).toUpperCase() : 'U'}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Menu
              anchorEl={anchorNav}
              open={Boolean(anchorNav)}
              onClose={closeMenu}
              sx={{ display: { xs: 'flex', md: 'none' } }}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem
                component={NavLink}
                to="/dashboard"
                onClick={closeMenu}
                className={location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}
                sx={{ color: '#f50057' }}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/apply"
                onClick={closeMenu}
                className={location.pathname === "/apply" ? "nav-link active" : "nav-link"}
                sx={{ color: '#f50057' }}
              >
                Apply
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/alltemplates"
                onClick={closeMenu}
                className={location.pathname === "/alltemplates" ? "nav-link active" : "nav-link"}
                sx={{ color: '#f50057' }}
              >
                All Templates
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/"
                onClick={() => {
                  closeMenu();
                  handleSignOut();
                }}
                className={location.pathname === "/" ? "nav-link active" : "nav-link"}
                sx={{ color: '#f50057' }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default DashboardNavbar;
