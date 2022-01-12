import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import CustomTable from './components/CustomTable';
import { padding } from '@mui/system';

function App() {
  return (
    <div className="App" style={
     {
       padding: "136px"
     }
    }>
      <CustomTable/>
    </div>
  );
}

export default App;
