describe ('Feature test',function(){
    var bank;
    bank = new Bank();

    describe('Bank',function(){
        it('displays initial balance',function(){
            expect(bank.currentBalance()).toEqual(0);
        });
    });
});