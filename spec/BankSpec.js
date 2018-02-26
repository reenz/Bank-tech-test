describe ('Feature test',function(){
    var bank;
    bank = new Bank();

    describe('Bank',function(){
        it('displays initial balance',function(){
            expect(bank.currentBalance()).toEqual(0);
        });

        it('customer can deposit ',function(){
            bank.depositAmount(1000);
            expect(bank.currentBalance()).toEqual(1000);
        });

        it('customer can withdraw ',function(){
            bank.withdrawAmount(500);
            expect(bank.currentBalance()).toEqual(500);
        });
    });
});