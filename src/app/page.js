import styles from "./page.module.css";

// pages/index.js
import React from 'react';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Next.js with Material-UI</h1>
      <Button variant="contained" color="primary">
        Hello Material-UI Button
      </Button>
    </div>
  );
};

export default Home;
