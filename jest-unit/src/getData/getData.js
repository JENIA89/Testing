const axios = require('axios');
const mapArrToString = require('../mapArrToString/mapArrToString')

const getData = async() => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const usersIds = response.data.map(user => user.id)
        return mapArrToString(usersIds)
    } catch (error) {
        console.log(error);
    }
}

module.exports = getData;
