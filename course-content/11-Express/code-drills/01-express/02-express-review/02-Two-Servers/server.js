const http = require('http');

const PORTONE= 7000;
const PORTTWO = 7500;

const quote1 = (req,res) => {
    res.end(`You can do this Thomas! Path hit ${request.url}`)
};

const quote2 = (req,res)=>{
    res.end("STUDY STUDY STUDY you got this!");
}

const serverOne = http.createServer(quote1);
const serverTwo = http.createServer(quote2);

serverOne.listen(PORTONE, () => {
    console.log(`Server listening on: http://localhost:${PORTONE}`);
});


serverTwo.listen(PORTTWO, () => {
    // Callback triggered when server is successfully listening. Hurray!
    console.log(`Server listening on: http://localhost:${PORTTWO}`);
  });