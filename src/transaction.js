function Transaction(amt, type, balance) {
    this.amt = amt;
    this.type = type;
    this.balance = balance;
}

Transaction.prototype.toString = function() {
    if (this.type === CREDIT) {
        return (this.date() + " || "+ this.amt + " || "  + " || " + this.balance );
    } else {
        return (this.date() + " || " +  " || " + this.amt + " || " + this.balance );
    }
};

Transaction.prototype.date = function(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    return (dd + '/' + mm + '/'+ yyyy);
};