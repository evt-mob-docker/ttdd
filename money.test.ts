import Dollar from './money'

test('Dollar', () => {
    let five = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
})