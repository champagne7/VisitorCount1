const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

let visitorCount = 0;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/TestReact2', (req, res) => {
  res.send('Hello from TestReact2!');
});

app.get('/Test', (req, res)=>{
  res.send("abcd");
})

app.get('/api/visitor-count', (req, res) => {
  // Increment the visitor count on every visit
  console.log("hey you there in server");
  visitorCount++;
  // res.send("abcd");
  res.json({ count: visitorCount });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
