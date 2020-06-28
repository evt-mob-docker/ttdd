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

test('Multiplication', () => {
    const five = new Dollar(5);
    // assertEquals(x,y) -> assertTrue(x.equals(y));
    expect(five.times(2).equals(new Dollar(10))).toBe(true);
    expect(five.times(3).equals(new Dollar(15))).toBe(true);
})

test('Equality', () => {
    const five = new Dollar(5);
    expect(five.equals(new Dollar(5))).toBe(true);
    expect(five.equals(new Dollar(6))).toBe(false);
    expect(five.equals(3)).toBe(false);
})

test('isDollar', () => {
    expect(isDollar(new Dollar(1))).toBe(true);
})