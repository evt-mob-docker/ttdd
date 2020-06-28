import Dollar, { isDollar } from './money'

/** TODO
 * Dollar 型の判定
 * $5 + 10 CHF = $10 (rate 2:1)
 * amount を privateにする
 * Moneyの丸め処理どうする？
 * hashCode()
 * nullとの等価性比較
 * 他のオブジェクトとの等価性比較
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
    expect(five.equals(3)).toBe(false);
})

test('isDollar', () => {
    expect(isDollar(new Dollar(1))).toBe(true);
})