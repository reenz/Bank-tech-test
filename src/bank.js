const CREDIT = "credit";

const DEBIT = "debit";

function Bank() {
    this.balance = 0;
    this.statement = [];
}

Bank.prototype.currentBalance = function(){
    return this.balance;
};

Bank.prototype.depositAmount = function(amount) {
    this.balance += amount;
    this.addOneTransaction(amount, CREDIT);
};

Bank.prototype.addOneTransaction = function(amount,type) {
    var transaction = new Transaction(amount, type, this.balance );
    this.statement.push(transaction);
};

Bank.prototype.withdrawAmount = function(amount){
    this.balance -= amount;
    this.addOneTransaction(amount, DEBIT);
};

Bank.prototype.printStatement = function() {
    var header = 'date  || credit || debit || balance \n';
    var str = "";
    this.statement.reverse().forEach(st => {
        str += (st + "\n");
    });
    return header + str;
};

