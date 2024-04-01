import styles from "./page.module.css";

// pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
const Home = () => {
  return (
    <div>
     <Navbar />
     <Header />
    </div>
  );
};

export default Home;
