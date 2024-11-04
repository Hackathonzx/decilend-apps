// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Repayment {
    struct RepaymentSchedule {
        uint256 loanId;
        uint256 dueDate;
        uint256 amount;
        bool isPaid;
    }

    mapping(uint256 => RepaymentSchedule[]) public repaymentSchedules;

    function createRepaymentSchedule(uint256 loanId, uint256 dueDate, uint256 amount) external {
        repaymentSchedules[loanId].push(RepaymentSchedule(loanId, dueDate, amount, false));
    }

    function markAsPaid(uint256 loanId, uint256 scheduleIndex) external {
        RepaymentSchedule storage schedule = repaymentSchedules[loanId][scheduleIndex];
        require(!schedule.isPaid, "Already paid");
        schedule.isPaid = true;
    }
}
