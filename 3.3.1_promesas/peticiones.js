const axios = require('axios');

axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian')
    .then(function ({ data }) {
    // handle success
    console.log(data.meals[0].idMeal);
    return axios.get (``)
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .finally(function () {
    // always executed
    });
