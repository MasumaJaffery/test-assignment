import styles from "./page.module.css";

// pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Container from '../components/Container';
const Home = () => {
  return (
    <div>
     <Navbar />
     <Header />
     <Container />
    </div>
  );
};

export default Home;
