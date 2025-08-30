// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title Greeter
 * @dev A simple contract to store and update a greeting message.
 * This is the "magic scroll" we will interact with from our React app.
 */
contract Greeter {
    string private greeting;

    // This runs ONCE when the contract is deployed..
    constructor(string memory _initialGreeting) {
        greeting = _initialGreeting;
    }

    // It's a `view` function, so it's free to call (no gas cost).
    function getGreeting() public view returns (string memory) {
        return greeting;
    }

    // This changes the state of the blockchain and requires a transaction (costs gas).
    function setGreeting(string memory _newGreeting) public {
        greeting = _newGreeting;
    }
}