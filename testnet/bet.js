const rskapi = require('rskapi');
const config = require('./config.json');
const Tx = require('ethereumjs-tx');

const host = rskapi.host(config.host);

if (config.account.privateKey.startsWith('0x'))
    config.account.privateKey = config.account.privateKey.substring(2);

const privateKey = new Buffer(config.account.privateKey, 'hex');

const betvalue = parseInt(process.argv[2]);

const tx = {
    to: config.contract,
    gasPrice: 0,
    gas: 3000000,
    data: "0x11610c25", // bet()
    value: betvalue
};

(async function() {
    const nonce = parseInt(await host.getTransactionCount(config.account.address, "latest"));
    
    tx.nonce = nonce;

    const signedtx = new Tx(tx);
    signedtx.sign(privateKey);
    
    const serializedTx = signedtx.serialize();
    const data = '0x' + serializedTx.toString('hex');
    
    const txhash = await host.sendRawTransaction(data);

    console.log('transaction', txhash);
})();

