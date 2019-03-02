
const Bet = artifacts.require('./Bet.sol');

contract('Bet', function (accounts) {
    beforeEach(async function () {
        this.bet = await Bet.new();
    });
    
    it('zero pot', async function () {
        const pot = await this.bet.pot();
        
        assert.equal(pot, 0);
    });
});