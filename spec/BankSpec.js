describe ('Feature test',function(){
    var bank;

    beforeEach(function() {
        bank = new Bank();
    });
    
    describe('Bank transactions',function(){

        it('displays initial balance',function(){
            expect(bank.currentBalance()).toEqual(0);
        });

        it('customer can deposit ',function(){
            bank.depositAmount(1000);
            expect(bank.currentBalance()).toEqual(1000);
        });

        it('customer can withdraw ',function(){
            bank.depositAmount(1000);
            bank.withdrawAmount(500);
            expect(bank.currentBalance()).toEqual(500);
        });
    
        it('multiple deposit ',function(){
            bank.depositAmount(1000);
            bank.depositAmount(1500);
            expect(bank.currentBalance()).toEqual(2500);
        });
    });

    describe('bank statement',function(){
        it('displays one transaction',function(){
            bank.depositAmount(1000);
            var expected = "27/2/2018 || 1000 ||  || 1000";
            expect(bank.printStatement()).toContain(expected);
        });

        it('displays two transaction',function(){
            bank.depositAmount(1000);
            bank.withdrawAmount(500);
            var expected = ("27/2/2018 || 1000 ||  || 1000",
            "27/2/2018 ||  || 500 || 500");
            expect(bank.printStatement()).toContain(expected);
        });
        
    });
});