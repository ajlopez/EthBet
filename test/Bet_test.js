
const Bet = artifacts.require('./Bet.sol');

const expectThrow = require('./utils').expectThrow;

contract('Bet', function (accounts) {
    beforeEach(async function () {
        this.bet = await Bet.new(2000, 10);
    });
    
    it('zero pot', async function () {
        const pot = await this.bet.pot();
        
        assert.equal(pot, 0);
    });
    
    it('bet', async function () {
        await this.bet.bet({ value: 1000 });
        
        const pot = (await this.bet.pot()).toNumber();
        
        assert.ok(pot === 1000 || pot === 0);
        
        if (pot === 0) {
            const balance = await web3.eth.getBalance(this.bet.address);
            assert.equal(balance, 100);
        }
    });

    it('cannot bet 0 value', async function () {
        expectThrow(this.bet.bet({ value: 0 }));
    });
    
    it('cannot bet more than max value', async function () {
        expectThrow(this.bet.bet({ value: 3000 }));
    });
});