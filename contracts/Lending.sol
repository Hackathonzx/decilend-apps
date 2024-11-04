// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract Lending is AccessControl {
    bytes32 public constant LENDER_ROLE = keccak256("LENDER_ROLE");
    bytes32 public constant BORROWER_ROLE = keccak256("BORROWER_ROLE");

    struct Loan {
        uint256 id;
        address borrower;
        uint256 amount;
        uint256 interestRate;
        uint256 term; // in days
        bool isFunded;
        bool isRepaid;
    }

    uint256 public loanCount;
    mapping(uint256 => Loan) public loans;

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setRoleAdmin(LENDER_ROLE, DEFAULT_ADMIN_ROLE);
        _setRoleAdmin(BORROWER_ROLE, DEFAULT_ADMIN_ROLE);
    }

    function createLoan(uint256 amount, uint256 interestRate, uint256 term) external onlyRole(BORROWER_ROLE) {
        loanCount++;
        loans[loanCount] = Loan(loanCount, msg.sender, amount, interestRate, term, false, false);
    }

    function fundLoan(uint256 loanId) external onlyRole(LENDER_ROLE) {
        Loan storage loan = loans[loanId];
        require(!loan.isFunded, "Loan already funded");
        loan.isFunded = true;
    }

    function repayLoan(uint256 loanId) external onlyRole(BORROWER_ROLE) {
        Loan storage loan = loans[loanId];
        require(loan.isFunded, "Loan not funded");
        require(!loan.isRepaid, "Loan already repaid");
        loan.isRepaid = true;
    }
}
