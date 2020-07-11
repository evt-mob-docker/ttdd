import { Money, Expression, Bank } from './money'

/**TODO
 * 
 * $5 + 10 CHF = $10 (rate 2:1)
 * $5 + $5 = 10
 */

/** TODO(old)
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

    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
})

test('Currency', () => {
    expect(Money.dollar(5).currency()).toBe('USD');
    expect(Money.franc(5).currency()).toBe('CHF');
})

// test('testAddition', () => {
//     const sum = Money.dollar(5).plus(Money.dollar(5));
//     expect(sum.equals(Money.dollar(10)));
// });

// 最終的にやりたいこと
// Expression(式) bank.reduce($5 + 10 CHF + 100 JPY, "USD") = $7.5
test('testSimpleAddition', () => {
    const five = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, "USD"); // bank.reduce($5 + $5, "USD") = $10
    expect(Money.dollar(10).equals(reduced)).toBe(true); // assertion: 「reducedは$10に等しい」が成り立つことを要請する
})




/**
 * DONE
 * equalの一般化
 * FrancとDollarを比較する
 * Referctering(常にグリーン) と バグ(まずレッドにする失敗するテストを追加)の違い
 * Referctering : コードの振る舞いが変わらないので常にグリーン
 * バグ：コードの振る舞いをかえてOK。バグなので。ある意味、くくりで言うと新機能の追加も同じこと。
 */