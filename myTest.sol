//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.9;

//import hardhat console
import "hardhat/console.sol";

contract MyTest {

//static variables
uint256 public unlockedTime;
address payable public owner;


event Withdrawal (uint256 amount, uint when);


//constructor
constructor (uint256 _unlockedTime) payable {
    require (block.timestamp < _unlockedTime, "Unlocked Time should be in future");

    unlockedTime = _unlockedTime;
    owner = payable (msg.sender);

}

//withdrawal functions
    //ftrace | funcSig
    function withdraw () public {
        require (block.timestamp >=unlockedTime, "Wait Till the time period completed");
        require (msg.sender == owner, "You are not an owner");

        emit Withdrawal (address (this).balance , block.timestamp);
    }  

}