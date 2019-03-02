
const Bet = artifacts.require('./Bet.sol');

contract('Bet', function (accounts) {
    beforeEach(async function () {
        this.bet = await Bet.new();
    });
    
    it('zero pot', async function () {
        const pot = await this.bet.pot();
        
        assert.equal(pot, 0);
    });
    
    it('bet', async function () {
        await this.bet.bet({ value: 1000 });
        
        const pot = (await this.bet.pot()).toNumber();
        
        assert.ok(pot === 1000 || pot === 0);
    });
});