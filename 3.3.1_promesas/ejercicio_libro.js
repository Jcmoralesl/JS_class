const axios = require('axios');

axios.get('http://openlibrary.org/search.json?author=asimov')
    .then(function ({ tittle }) {
    // handle success
    console.log(tittle);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .finally(function () {
    // always executed
    });