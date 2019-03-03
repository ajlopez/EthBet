pragma solidity ^0.4.24;

contract Bet {
    uint public pot;
    uint public accum;
    uint public maxbet;
    uint8 public fee;

    constructor(uint _maxbet, uint8 _fee) public {
        require(_fee < 100);
        maxbet = _maxbet;
        fee = _fee;
    }
    
    function bet() public payable {
        require(msg.value > 0);
        require(msg.value <= maxbet);
        
        uint divisor = 3 + pot / msg.value;
        
        pot += msg.value;
        
        accum += uint(msg.sender);
        accum += block.number;
        accum += now;
        accum += msg.value;
        
        uint result = accum % divisor;
        
        if (result == 0) {
            uint prize = pot * (100 - fee)/ 100;
            pot = 0;
            msg.sender.transfer(prize);
        }
    }
}

