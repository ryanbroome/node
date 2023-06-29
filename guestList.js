const { faker } = require('@faker-js/faker');

const axios = require('axios');

async function stuff() {
  let res = await axios.get(`http://numbersapi.com/1/trivia?json`);
  console.log('res.data', res.data);
}

stuff();
function makeTenGuests() {
  const guests = [];
  for (let i = 0; i < 10; i++) {
    guests.push(faker.person.fullName());
    console.log('Here is person number', i, ' named:', faker.person.fullName());
  }
  return guests;
}
export.module({
    
})
makeTenGuests();
