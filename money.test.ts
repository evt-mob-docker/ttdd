import Dollar from './money'

test('Dollar', () => {
    const five = new Dollar(5);
    const ten = five.times(2);
    expect(ten.amount).toBe(10);
    const fifteen = five.times(3);
    expect(fifteen.amount).toBe(15);
    // five is still five (immutability)
    expect(five.amount).toBe(5);
})