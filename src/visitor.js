import React, { useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  // Function to increment the count
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Visitor Counter</h1>
      <p>Total Visits: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default VisitorCounter;
