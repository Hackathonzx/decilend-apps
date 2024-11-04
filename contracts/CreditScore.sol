// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CreditScore {
    mapping(address => uint256) public creditScores;
    mapping(address => uint256) public repaymentHistory;

    function updateCreditScore(address borrower, bool repaid) external {
        if (repaid) {
            repaymentHistory[borrower]++;
            creditScores[borrower] += 10; // Simple logic for credit scoring
        } else {
            creditScores[borrower] -= 5; // Penalty for not repaying
        }
    }

    function getCreditScore(address borrower) external view returns (uint256) {
        return creditScores[borrower];
    }
}
