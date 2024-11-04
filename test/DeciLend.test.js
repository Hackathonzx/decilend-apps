const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DeciLend Contracts", function () {
  let lending, repayment, creditScore;
  let owner, borrower, lender;

  beforeEach(async function () {
    [owner, borrower, lender] = await ethers.getSigners();

    // Deploy Lending Contract
    const LendingFactory = await ethers.getContractFactory("Lending");
    lending = await LendingFactory.deploy();

    // Deploy Repayment Contract
    const RepaymentFactory = await ethers.getContractFactory("Repayment");
    repayment = await RepaymentFactory.deploy();

    // Deploy CreditScore Contract
    const CreditScoreFactory = await ethers.getContractFactory("CreditScore");
    creditScore = await CreditScoreFactory.deploy();

    // Grant roles
    await lending.grantRole(await lending.BORROWER_ROLE(), borrower.address);
    await lending.grantRole(await lending.LENDER_ROLE(), lender.address);
  });


    it("should allow a borrower to create a loan", async function () {
        await lending.connect(borrower).createLoan(1000, 5, 30); // amount, interest rate, term
        const loan = await lending.loans(1);
        expect(loan.amount).to.equal(1000);
        expect(loan.interestRate).to.equal(5);
        expect(loan.term).to.equal(30);
        expect(loan.borrower).to.equal(borrower.address);
        expect(loan.isFunded).to.be.false;
    });

    it("should allow a lender to fund a loan", async function () {
        await lending.connect(borrower).createLoan(1000, 5, 30);
        await lending.connect(lender).fundLoan(1);
        const loan = await lending.loans(1);
        expect(loan.isFunded).to.be.true;
    });

    it("should allow a borrower to repay a loan", async function () {
        await lending.connect(borrower).createLoan(1000, 5, 30);
        await lending.connect(lender).fundLoan(1);
        await lending.connect(borrower).repayLoan(1);
        const loan = await lending.loans(1);
        expect(loan.isRepaid).to.be.true;
    });

    it("should update the credit score on repayment", async function () {
        await lending.connect(borrower).createLoan(1000, 5, 30);
        await lending.connect(lender).fundLoan(1);
        await lending.connect(borrower).repayLoan(1);
        await creditScore.updateCreditScore(borrower.address, true);
        const score = await creditScore.getCreditScore(borrower.address);
        expect(score).to.equal(10); // Assuming the initial score is 0 and repayment increases it by 10
    });
});
