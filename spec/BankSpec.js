describe ('Feature test',function(){
    var bank;
    

    describe('Bank',function(){

        beforeEach(function() {
            bank = new Bank();
        });

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
});