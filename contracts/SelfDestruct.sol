// "SPDX-License-Identifier: MIT"
pragma solidity ^0.7.3;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract SelfDestruct is Ownable {
    using SafeMath for uint;
    uint public value;

    function setValue() public {
        value = value.add(1);
    }

    function killContract() public {
        selfdestruct(payable(owner()));
    }
}