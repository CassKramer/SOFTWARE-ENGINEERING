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
