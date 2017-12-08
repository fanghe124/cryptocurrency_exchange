let fs = require('fs');
let axios = require('axios');




let getApi = () => {
    axios.get('https://bittrex.com/api/v1.1/public/getcurrencies').then(res => {
	    console.log(res.data.result[0]);
	});
}


    getApi();