pragma solidity ^0.4.24;

contract Bet {
    uint public pot;
    uint public accum;
    
    function bet() public payable {
        uint divisor = 3 + pot / msg.value;
        
        pot += msg.value;
        
        accum += uint(msg.sender);
        accum += block.number;
        accum += now;
        
        uint result = accum % divisor;
        
        if (result == 0) {
            uint price = pot;
            pot = 0;
            msg.sender.transfer(price);
        }
    }
}