import React, { useState } from 'react';
import './App.css';
import Button from './button';

function App() {
  const [buttonCount, setButtonCount] = useState(10000);
  const root = document.querySelector(':root');
  const setPadding = (val) => root.style.setProperty('--button-padding', val);
  const setBorderWidth = (val) => root.style.setProperty('--button-border-width', val);
  const setButtonColor = (val) => root.style.setProperty('--button-bg', val);
  const setFontSize = (val) => root.style.setProperty('--button-font-size', val);
  const setMargin = (val) => root.style.setProperty('--button-margin', val);
  const setColor = (val) => root.style.setProperty('--button-color', val);

  const buttons = [];
  for(let i = 0; i < buttonCount; i++) {
    buttons.push(
      <Button key={i.toString()}>
        Button
      </Button>
    );
  }

  return (
    <div className="main">
      <div className="left-section">
        <h1>CSS vars buttons</h1>
        <div className='btn-container'>
          {buttons}
        </div>
      </div>
      <div className='sidebar'>
        <label>Button Count</label>
        <input type="number" value={buttonCount} onChange={(e) => {
          setButtonCount(e.target.value);
          console.log(e.target.value);
        }} />
        <br/>
        <button onClick={() => setButtonCount(buttonCount + 10)}>Add 10</button>
        <br/>
        <button onClick={() => setButtonCount(buttonCount + 100)}>Add 100</button>
        <br/>
         <button onClick={() => setButtonCount(buttonCount + 1000)}>Render 1000 buttons</button>
        <br/>

        <label>Padding</label>
        <select onChange={(e) => setPadding(e.target.value)}>
          <option value="0">Padding</option>
          <option value="0.5rem">0.5rem</option>
          <option value="1rem">1rem</option>
          <option value="1.5rem">1.5rem</option>
          <option value="2rem">2rem</option>
        </select>

        <br/>

        <label>Border Width</label>
        <select onChange={(e) => setBorderWidth(e.target.value)}>
          <option value="0">Border Width</option>
          <option value="1px">1 px</option>
          <option value="2px">2 px</option>
          <option value="3px">3 px</option>
        </select>

        <br/>

        <label>Button Color</label>
        <select onChange={(e) => setButtonColor(e.target.value)}>
          <option value="white">Button Color</option>
          <option value="var(--ads-color-orange-500)">Orange</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
        </select>

        <br/>

        <label>Font Size</label>
        <select onChange={(e) => setFontSize(e.target.value)}>
          <option value="0">Font Size</option>
          <option value="1rem">1 rem</option>
          <option value="1.5rem">1.5 rem</option>
          <option value="2rem">2 rem</option>
        </select>

        <br/>

        <label>Margin</label>
        <select onChange={(e) => setMargin(e.target.value)}>
          <option value="0">Margin</option>
          <option value="2px">2 px</option>
          <option value="4px">4 px</option>
          <option value="6px">6 px</option>
        </select>

        <br/>

        <label>Color</label>
        <select onChange={(e) => setColor(e.target.value)}>
          <option value="white">Color</option>
          <option value="var(--ads-color-black)">Black</option>
          <option value="white">White</option>
        </select>
      </div>
    </div>
  );
}

export default App;
