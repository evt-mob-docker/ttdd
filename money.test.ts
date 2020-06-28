import { isDollar, Money, Franc } from './money'

/** TODO
 * Dollar 型の判定
 * $5 + 10 CHF = $10 (rate 2:1)
 * Moneyの丸め処理どうする？
 * hashCode()
 * nullとの等価性比較
 * 他のオブジェクトとの等価性比較
 * DollarとFrancの重複
 * timesの一般化
 * currencyが文字列で表されているのがいまいち
 */

test('Multiplication', () => {
    // const five = new Dollar(5);
    const five: Money = Money.dollar(5);
    // assertEquals(x,y) -> assertTrue(x.equals(y));
    expect(five.times(2).equals(Money.dollar(10))).toBe(true);
    expect(five.times(3).equals(Money.dollar(15))).toBe(true);
})

test('Equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.dollar(5).equals(3)).toBe(false);

    expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false);

    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
})

test('isDollar', () => {
    expect(isDollar(Money.dollar(1))).toBe(true);
})

test('FrancMultiplication', () => {
    const five = Money.franc(5);
    // assertEquals(x,y) -> assertTrue(x.equals(y));
    expect(five.times(2).equals(Money.franc(10))).toBe(true);
    expect(five.times(3).equals(Money.franc(15))).toBe(true);
})
test('Currency', () => {
    expect(Money.dollar(5).currency()).toBe('USD');
    expect(Money.franc(5).currency()).toBe('CHF');
})

// バグを再現するテスト
test('DifferentClassEquality', () => {
    expect(new Money(10, 'CHF').equals(new Franc(10, 'CHF'))).toBe(true);
})


/**
 * DONE
 * equalの一般化
 * FrancとDollarを比較する
 * Referctering(常にグリーン) と バグ(まずレッドにする失敗するテストを追加)の違い
 * Referctering : コードの振る舞いが変わらないので常にグリーン
 * バグ：コードの振る舞いをかえてOK。バグなので。ある意味、くくりで言うと新機能の追加も同じこと。
 */