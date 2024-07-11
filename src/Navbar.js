import { AppBar, Button, IconButton, Toolbar, Typography, Box, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import octotechlogo from './images/octotechlogo-modified.png'
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
    closeMenu(); // Close the menu when the route changes
  }, [location]);

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
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={NavLink}
              to="/"
              exact
              className={location.pathname === "/" ? "nav-link active" : "nav-link"}
              sx={{ color: '#f50057' }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/about"
              className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
              sx={{ color: '#f50057' }}
            >
              About
            </Button>
            <Button
              component={NavLink}
              to="/admin"
              className={location.pathname === "/admin" ? "nav-link active" : "nav-link"}
              sx={{ color: '#f50057' }}
            >
              Admin
            </Button>
            <Button
              component={NavLink}
              to="/login"
              className={location.pathname === "/login" ? "nav-link active" : "nav-link"}
              sx={{ color: '#f50057' }}
            >
              Login
            </Button>
            <Button
              component={NavLink}
              to="/signup"
              className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}
              sx={{ color: '#f50057' }}
            >
              SignUp free
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" edge="start" color="inherit" onClick={openMenu}>
              <MenuIcon />
            </IconButton>
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
                to="/"
                exact
                onClick={closeMenu}
                className={location.pathname === "/" ? "nav-link active" : "nav-link"}
                sx={{ color: '#f50057' }}
              >
                Home
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/about"
                onClick={closeMenu}
                className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                sx={{ color: '#f50057' }}
              >
                About
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/signup"
                onClick={closeMenu}
                className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}
                sx={{ color: '#f50057' }}
              >
                Signup
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/login"
                onClick={closeMenu}
                className={location.pathname === "/login" ? "nav-link active" : "nav-link"}
                sx={{ color: '#f50057' }}
              >
                Login
              </MenuItem>
            </Menu>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#f50057' }}
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
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontFamily: 'Orbitron, sans-serif', color: '#f50057' }}
          >
            OCTOTECH
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
