# SOFTWARE-ENGINEERING
#  Assignment 9: Microservice Implementation 

(fish.js file)

const http = require('node:http');

const hostname = 'localhost';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Large Mouth Bass: minumum length requirement is 14 inches; daily limit is 5 fish\n"+
  "Small Mouth Bass: minimum length requirement is 14 inches and the daily limit is 5 fish\n" +
  "Blue Gill: there is no minimum length requirement or daily limit");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 

(recieve.js file)

const axios = require('axios');

async function getData()  {
const url = 'http://localhost:3001/';
try {

  const response = await axios.get(url);
  console.log('Response:', response.data);
  }catch(error) {
    console.error('Error:', error.message);
  }
}

getData();


A. Request Data 
1) open an integrated terminal for fish.js
2) type node fish.js
3) this will start the microservice server and it should output something like this: Server running at http://localhost:3001/
4) leave this running
5) open an integrated terminal for recieve.js
6) type node recieve.js
7) this will send a request to the server to get the json object holding the information on each fish

B. Recieve Data
1) fish.js will respond to the request made by recieve.js
2) the response will then be recieved by recieve.js
3) it should look like this: Response: Large Mouth Bass: minumum length requirement is 14 inches; daily limit is 5 fish
Small Mouth Bass: minimum length requirement is 14 inches and the daily limit is 5 fish
Blue Gill: there is no minimum length requirement or daily limit

C. UML Diagram
<img width="631" alt="Screen Shot 2023-07-28 at 3 40 43 PM" src="https://github.com/CassKramer/SOFTWARE-ENGINEERING/assets/107910626/595dd1a5-5fd3-4bdf-9734-58443f9faabf">

