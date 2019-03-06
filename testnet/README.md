# Bet on RSK Testnet

The bet contract was deployed to RSK Testnet. These are the
commands you can send to the contract, doing a bet and query the
contract status.

## Install

Run
```
npm install
```

## Configure

Copy `config.json.example` to `config.json`:

```json
{
    "host": "https://public-node.testnet.rsk.co:443",
    "contract": "0xe9a8880e0b1535e7f00ecab9e1da38d63cba01a6",
    "account": {
        "address": "0x<your account address>",
        "privateKey": "0x<your account private key>"
    }
}
```

Edit
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

It returns:
- `pot`: the current total amount in the pot.
- `fees`: fees gained by the contract (10% of the paid wins).
- `balance`: your account balance (in weis).
  

Bet amount:

```
node bet <weiamount>
```

Example:
```
node bet 1000
```

The maximum bet allowed is ONE MILLION. The unit is the wei.
