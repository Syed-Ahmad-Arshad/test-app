import React, { useState } from 'react';

function App() {
  const [inputNumber, setInputNumber] = useState('');
  const [result, setResult] = useState(null);

  const processNumber = () => {
    const number = parseInt(inputNumber,  10);
    if (!isNaN(number)) {
      setResult(number *  2); // Example processing: multiply by  2
    } else {
      setResult('Please enter a valid number.');
    }
  };

  return (
    <div className="App">
      <h1>Number Processor</h1>
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={processNumber}>Process Number</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default App;