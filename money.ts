const isMoney = (arg: any): arg is Money => arg instanceof Money;
export abstract class Money {
    protected amount: number;
    protected currencyName: string;
    constructor(amount: number, currencyName: string) {
        this.amount = amount;
        this.currencyName = currencyName;
    }
    equals(arg: any): boolean {
        if (this.constructor.name !== arg.constructor.name) {
            return false
        }
        if (isMoney(arg)) {
            return this.amount === arg.amount;
        }
        return false;
    }

    static dollar(amount: number): Money {
        return new Dollar(amount, 'USD');
    }

    static franc(amount: number): Money {
        return new Franc(amount, 'CHF');
    }

    abstract times(multiplier: number): Money

    currency(): string {
        return this.currencyName;
    }

}
class Dollar extends Money {

    times(multiplier: number): Money {
        return Money.dollar(multiplier * this.amount);
    }

}
export class Franc extends Money {

    times(multiplier: number): Money {
        return Money.franc(multiplier * this.amount);
    }

}

const isFranc = (arg: any): arg is Franc => {
    return arg instanceof Franc;
}

export const isDollar = (arg: any): arg is Dollar => {
    return arg instanceof Dollar;
}

export default Dollar;
