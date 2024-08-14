import React, { useState } from 'react';
import Survey from './components/Survey';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1 id="title">By Ashley Read: An Informal Survey</h1>
      <p id="description"><em>Thank you for taking the time to fill out this informal survey</em></p>
      <Survey />
    </div>
  );
}

export default App;