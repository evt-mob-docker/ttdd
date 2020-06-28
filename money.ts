const isMoney = (arg: any): arg is Money => arg instanceof Money;

export class Money {
    protected amount: number;
    protected currencyName: string;
    constructor(amount: number, currencyName: string) {
        this.amount = amount;
        this.currencyName = currencyName;
    }
    equals(arg: any): boolean {
        if (this.currencyName !== arg.currencyName) {
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

    times(multiplier: number): Money {
        return new Money(multiplier * 0, '');
    }

    currency(): string {
        return this.currencyName;
    }

}
class Dollar extends Money {

    constructor(amount: number, currencyName: string) {
        super(amount, currencyName);
    }

    times(multiplier: number): Money {
        return new Dollar(multiplier * this.amount, this.currencyName)
    }

}
export class Franc extends Money {

    constructor(amount: number, currencyName: string) {
        super(amount, currencyName);
    }
    times(multiplier: number): Money {
        return new Franc(multiplier * this.amount, this.currencyName)
    }

}

const isFranc = (arg: any): arg is Franc => {
    return arg instanceof Franc;
}

export const isDollar = (arg: any): arg is Dollar => {
    return arg instanceof Dollar;
}

export default Dollar;
