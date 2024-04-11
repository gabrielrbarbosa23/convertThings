import React, { useState } from 'react';
import '../styles/bin2dec.css';

const Converter = ({ fromBase, toBase, convertFunction }) => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [error, setError] = useState('');

  const convert = () => {
    if (error || inputValue === '') {
      // Se houver um erro ou o valor estiver vazio, não realiza a conversão
      return;
    }

    const result = convertFunction(inputValue);
    setOutputValue(result);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value === '') {
      // Se o valor for vazio, limpa o erro e o resultado
      setError('');
      setOutputValue('');
      setInputValue('');
    } else if (fromBase === 'Binary') {
      // Verifica se o valor é composto apenas por 0 e 1
      const isValid = /^[01]+$/.test(value);

      if (isValid) {
        setError('');
        setInputValue(value);
      } else {
        setError('Por favor, digite apenas 0 ou 1.');
      }
    } else if (fromBase === 'Decimal') {
      // Verifica se o valor é um número inteiro
      const isValid = /^\d+$/.test(value);

      if (isValid) {
        setError('');
        setInputValue(value);
      } else {
        setError('Por favor, digite apenas números inteiros.');
      }
    }
  };

  return (
    <div>
      <input
        className="input-bin"
        type="text"
        placeholder={`Enter ${fromBase} number`}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="button-bin" onClick={convert}>Convert</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div className="result-bin">{`Result in ${toBase}: ${outputValue}`}</div>
    </div>
  );
};

export default Converter;
