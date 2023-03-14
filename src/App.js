import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Reasons from './components/Reasons';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {

  return (
    <div>
      <Nav />
      <Header />
      <Reasons />
      <Footer />
    </div>
   
  );
}

export default App;
