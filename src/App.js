// Import React and the AppBar component
import React from 'react';
import './App.css';

// Import PrimarySearchAppBar
import PrimarySearchAppBar from './components/PrimarySearchAppBar'; // Adjust the path if necessary
import Body from './components/Body';
import Navbar from './components/Navbar';
import Best from './components/Best';
import Recent from './components/Recent';
import Footer from './components/Footer';
import Footer1 from './components/Footer1';


function App() {
  return (
    <div className="App">
      {/* Render PrimarySearchAppBar component here */}
      <PrimarySearchAppBar />
      <Body />
      <Navbar />
     <Best />
      <Recent />
      <Footer />
      <Footer1 />
     
      
      
    </div>
  );
}

export default App;
