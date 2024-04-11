import React, { useState } from 'react';
import { 
  celsiusToFahrenheit, 
  fahrenheitToCelsius, 
  celsiusToKelvin, 
  kelvinToCelsius, 
  fahrenheitToKelvin, 
  kelvinToFahrenheit 
} from '../components/jsTemp.jsx';
import "../styles/temperature.css";

const Temperature = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const clearAll = () => {
    setCelsius('');
    setFahrenheit('');
    setKelvin('');
  };

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value !== '' ? celsiusToFahrenheit(parseFloat(value)) : '');
    setKelvin(value !== '' ? celsiusToKelvin(parseFloat(value)) : '');
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value !== '' ? fahrenheitToCelsius(parseFloat(value)) : '');
    setKelvin(value !== '' ? fahrenheitToKelvin(parseFloat(value)) : '');
  };

  const handleKelvinChange = (e) => {
    const value = e.target.value;
    setKelvin(value);
    setCelsius(value !== '' ? kelvinToCelsius(parseFloat(value)) : '');
    setFahrenheit(value !== '' ? kelvinToFahrenheit(parseFloat(value)) : '');
  };

  return (
    <div className='body-temp'>
      <div className="content-temp">
        <div className="title">
          <h1>Temperature Converter</h1>
        </div>

        <div id="celsius">
          <input className='inputs' type="number" value={celsius} onChange={handleCelsiusChange} placeholder="Celsius" />
          <span className="icon">Cº</span>
        </div>
        <div id="fahrenheit">
          <input className='inputs' type="number" value={fahrenheit} onChange={handleFahrenheitChange} placeholder="Fahrenheit" />
          <span className="icon">ºF</span>
        </div>
        <div id="kelvin">
          <input className='inputs' type="number" value={kelvin} onChange={handleKelvinChange} placeholder="Kelvin" />
          <span className="icon">K</span>
        </div>

        <div className="button">
          <button onClick={clearAll}>Clear all</button>
        </div>
      </div>
    </div>
  );
};

export default Temperature;