import Dollar from './money'

/** TODO
 * Dollar 型の判定
 */

test('Dollar', () => {
    const five = new Dollar(5);
    const ten = five.times(2);
    expect(ten.amount).toBe(10);
    const fifteen = five.times(3);
    expect(fifteen.amount).toBe(15);
    // five is still five (immutability)
    expect(five.amount).toBe(5);
})

test('Equals', () => {
    const five = new Dollar(5);
    expect(five.equals(new Dollar(5))).toBe(true);
    expect(five.equals(new Dollar(6))).toBe(false);
    // TODO: expect(five.equals(3).toBe(false);

})