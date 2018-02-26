function Bank(){
    this.balance = 0;
}

Bank.prototype.currentBalance = function(){
    return this.balance;
};

Bank.prototype.depositAmount = function(amount){
    return this.balance += amount;
};

Bank.prototype.withdrawAmount = function(amount){
    return this.balance -= amount;
};