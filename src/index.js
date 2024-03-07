import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
// import VisitorCounter from './visitor';

// ReactDOM.render(<h1>Webpage Not Found!</h1>, document.getElementById('root'));


// ReactDOM.render(<VisitorCounter />, document.getElementById('root'));


// ---------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("inside use effect");
    fetch('http://localhost:3002/api/visitor-count')
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        setCount(data.count);
        console.log("Response: ", data);  
        console.log("eat sleep");
        console.log(data.count);
      })
      .catch(error => {
        console.error('Error fetching visitor count:', error);
      });
  }, []);

  return (
    <div>
      <h1>Visitor Counter</h1>
      <p>Total Visits: {count}</p>
    </div>
  );
};

console.log("hey you there");

ReactDOM.render(
  <React.StrictMode>
    <VisitorCounter />
  </React.StrictMode>,
  document.getElementById('root')
);

