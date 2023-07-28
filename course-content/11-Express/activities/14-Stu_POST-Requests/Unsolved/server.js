const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  console.log(req.method, 'Request has been received')
  res.send('success')
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req,res) =>{
  console.log(req.method, 'Request has been posted')
  res.send('success')
})

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  console.log(req.method, "Request UPVOTE has been recieved")
  res.send('success')
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here
app.post('/api/upvotes', (req,res) => {
  console.log(req.method, "success your request has been recieved")
  res.send('seuccess')
})

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
