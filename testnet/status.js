const rskapi = require('rskapi');
const config = require('./config.json');

const host = rskapi.host(config.host);

const betvalue = parseInt(process.argv[2]);

const tx = {
    from: config.account.address,
    to: config.contract,
    gasPrice: 0,
    gas: 3000000,
    data: "0x4ba2363a", // pot()
    value: 0
};

(async function() {
    const pot = parseInt(await host.callTransaction(tx));
    console.log('pot', pot);

    const balance = parseInt(await host.getBalance(config.contract));
    console.log('fees', balance - pot);

    const balance2 = parseInt(await host.getBalance(config.account.address));
    console.log('balance', balance2);
})();

