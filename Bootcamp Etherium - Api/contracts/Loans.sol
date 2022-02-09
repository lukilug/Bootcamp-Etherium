// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract Loans {
   address public owner;

   uint public loansCount; 


   struct Loan{
       uint id;
       uint createDate;
       string description;
       uint totalAmount;
       uint payedAmount;
       uint debtAmount;
       string status;
   }

   mapping (uint => Loan) public loansList; 

  constructor() {
   owner = msg.sender;
   loansCount = 0;            
  }   

  modifier restricted () {
      require(msg.sender == owner, "No access for you mthfucker");
    _;
  }  

  function addLoan(string memory description, uint amount ) public restricted() {
    
      loansList[loansCount]=Loan(loansCount+1,block.timestamp,description,amount,0,amount,"C");
      loansCount++;
  }

  function getLoanList(int id) public restricted() view returns (Loan[] memory ) {
    Loan[] memory lList;

    if (id>=0) {
        if (loansCount > 0) {        
            lList = new Loan[](1);
            lList[0]=loansList[uint(id)];
            }
        }
    else
        {
        lList = new Loan[](loansCount);
        for (uint i=0;i<loansCount;i++)
        {    
            lList[i]=loansList[i];            
        }
        }
        
    return lList;
  }

}
