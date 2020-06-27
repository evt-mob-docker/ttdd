import Dollar from './money'

test('Dollar', () => {
    let mymoney = new Dollar(5);
    mymoney.times(2);
    expect(mymoney.amount).toBe(10);
    mymoney.times(3);
    expect(mymoney.amount).toBe(15);
})