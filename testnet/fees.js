
const rskapi = require('rskapi');
const config = require('./config.json');

const host = rskapi.host(config.host);

(async function() {
    const fees = parseInt(await host.getBalance(config.contract));
    console.log(fees);
})();

