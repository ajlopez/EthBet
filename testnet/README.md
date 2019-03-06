# Bet on RSK Testnet

## Install

Run
```
npm install
```

## Configure

Copy `config.json.example` to `config.json` and edit
the account fields (`address` and `privateKey`). If you don't
have an account or you don't know the private key, generate
one using https://github.com/ajlopez/RskUtils/tree/master/keys

You must
have balance in RSK testnet. Use [RSK Faucet](https://faucet.testnet.rsk.co/) to
get initial balance for your account.

## Commands

Get bet contract status:

```
node status
```

Bet amount:

```
node bet <weiamount>
```

Example:
```
node bet 1000
```

The maximum bet allowed is ONE MILLION. The unit is the wei.
