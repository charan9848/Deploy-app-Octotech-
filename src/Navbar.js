import { AppBar, Button, IconButton, Toolbar, Typography, Box, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import octotechlogo from './images/octotechlogo-modified.png';
import './Navbar.css';

function Navbar() {
  const [anchorNav, setAnchorNav] = useState(null);
  const location = useLocation();

  const openMenu = (e) => {
    setAnchorNav(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <div className="navbar-container">
      <AppBar position="fixed">
        <Toolbar>
          {/* Desktop Logo */}
          <IconButton
            size="large"
            edge="start"
            aria-label="logo"
            className="navbar-logo"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
          >
            <Box
              component="img"
              src={octotechlogo}
              alt="Octotech Logo"
              sx={{ height: 35, width: 35 }}
            />
          </IconButton>

          {/* Desktop Brand Name */}
          <Typography
            variant="h5"
            component={NavLink}
            to="/"
            className="navbar-brand"
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
              flexGrow: 0,
              mr: 4
            }}
          >
            OCTOTECH
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            <Button
              component={NavLink}
              to="/"
              exact
              className="nav-link"
              classes={{ root: location.pathname === "/" ? "active" : "" }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/admin"
              className="nav-link"
              classes={{ root: location.pathname === "/admin" ? "active" : "" }}
            >
              Admin
            </Button>
            <Button
              component={NavLink}
              to="/login"
              className="nav-link"
              classes={{ root: location.pathname === "/login" ? "active" : "" }}
            >
              Login
            </Button>
          </Box>

          {/* Desktop Sign Up Button */}
          <Button
            component={NavLink}
            to="/signup"
            className="signup-button"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            Sign Up Free
          </Button>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <IconButton
              size="large"
              className="menu-icon"
              onClick={openMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Mobile Logo */}
          <IconButton
            size="large"
            edge="start"
            aria-label="logo"
            className="navbar-logo"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <Box
              component="img"
              src={octotechlogo}
              alt="Octotech Logo"
              sx={{ height: 30, width: 30 }}
            />
          </IconButton>

          {/* Mobile Brand Name */}
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            className="navbar-brand"
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              textDecoration: 'none',
              flexGrow: 0,
              ml: 1
            }}
          >
            OCTOTECH
          </Typography>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorNav}
            open={Boolean(anchorNav)}
            onClose={closeMenu}
            className="mobile-menu"
            classes={{ paper: 'mobile-menu' }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              mt: '45px'
            }}
          >
            <MenuItem
              component={NavLink}
              to="/"
              exact
              onClick={closeMenu}
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </MenuItem>
            <MenuItem
              component={NavLink}
              to="/admin"
              onClick={closeMenu}
              className={location.pathname === "/admin" ? "active" : ""}
            >
              Admin
            </MenuItem>
            <MenuItem
              component={NavLink}
              to="/login"
              onClick={closeMenu}
              className={location.pathname === "/login" ? "active" : ""}
            >
              Login
            </MenuItem>
            <MenuItem
              component={NavLink}
              to="/signup"
              onClick={closeMenu}
              className={location.pathname === "/signup" ? "active" : ""}
              sx={{
                background: 'linear-gradient(45deg, #f50057, #ff4081)',
                color: 'white !important',
                margin: '8px 16px',
                borderRadius: '8px',
                '&:hover': {
                  background: 'linear-gradient(45deg, #d5004c, #ff3374)',
                }
              }}
            >
              Sign Up Free
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      {/* Add spacing below navbar */}
      <Toolbar />
    </div>
  );
}

export default Navbar;
