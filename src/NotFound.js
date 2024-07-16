// src/components/NotFound.js

import React from 'react';
import mrbean from './images/mrbean.png'
import { Box } from '@mui/system';

const NotFound = () => {
  return (
    <div>
        <div class='container mt-5 text-dark w-100 text-center ' >
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Box sx={{ width: 200, height: 200, margin: '0 auto' }}>
      <img src={mrbean} alt="Mr. Bean" style={{ width: '100%', height: '100%' }} />
    </Box>
      </div>
    </div>
  );
};

export default NotFound;
