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
        beforeEach(function() {
            jasmine.clock().install();
            var baseTime = new Date(2018, 1, 25);
            jasmine.clock().mockDate(baseTime);
        });
        

        it('displays one transaction',function(){
            bank.depositAmount(1000);
            var expected = "25/2/2018 || 1000.00 ||  || 1000.00";
            expect(bank.printStatement()).toContain(expected);
        });

        it('displays two transaction',function(){
            bank.depositAmount(1000);
            bank.withdrawAmount(500);
            var expected = ("25/2/2018 || 1000.00 ||  || 1000.00",
            "25/2/2018 ||  || 500.00 || 500.00");
            expect(bank.printStatement()).toContain(expected);
        });

        afterEach(function() {
            jasmine.clock().uninstall();
          });
        
    });
});