import React from 'react'
import './App.css'
import './index.css'
import CountdownContainer from './CountdownContainer'

export default function App() {
  return (
    <div className="App">
      <CountdownContainer 
        timeTillDate="05 20 2020" 
        timeFormat="MM DD YYYY, h:mm a"
      />
    </div>
  );
}
