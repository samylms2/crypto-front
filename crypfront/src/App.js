import React from 'react';
 import './App.css';
import LineChart from './Component/LineChart';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <div className="App">
             <Dashboard />
       <LineChart />
    </div>
  );
}

export default App;
