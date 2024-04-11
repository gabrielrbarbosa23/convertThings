import React from 'react';
import Converter from '../components/jsBin2Dec.jsx';

const decimalToBinary = (decimal) => {
  return (decimal >>> 0).toString(2); 
}; 

const binaryToDecimal = (binary) => {
  return parseInt(binary, 2).toString();
};

const Bin2dec = () => {
  return (
    <div className="content-bin">
      <div className="inputs-bin">
        <div className="label-bin">
          <h2>Conversor Binário/Decimal</h2>
          <Converter
            fromBase="Binary"
            toBase="Decimal"
            convertFunction={binaryToDecimal}
          />
        </div>
        <div className="label-bin">
          <h2>Conversor Decimal/Binário</h2>
          <Converter
            fromBase="Decimal"
            toBase="Binary"
            convertFunction={decimalToBinary}
          />
        </div>
      </div>
    </div>
  );
};

export default Bin2dec;
