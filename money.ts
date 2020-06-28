const isMoney = (arg: any): arg is Money => arg instanceof Money;
export abstract class Money {
    protected amount: number;
    protected currencyName: string | undefined;
    constructor(amount: number) {
        this.amount = amount;
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
        return new Dollar(amount);
    }

    static franc(amount: number): Money {
        return new Franc(amount);
    }

    abstract times(multiplier: number): Money

    currency(): string {
        if (this.currencyName === undefined) {
            throw (Error('currencyName should be set'));
        }
        return this.currencyName;
    }

}
class Dollar extends Money {

    constructor(amount: number) {
        super(amount);
        this.currencyName = 'USD'
    }

    times(multiplier: number): Money {
        return new Dollar(multiplier * this.amount);
    }

}
export class Franc extends Money {

    constructor(amount: number) {
        super(amount);
        this.currencyName = 'CHF'
    }

    times(multiplier: number): Money {
        return new Franc(multiplier * this.amount);
    }

}

const isFranc = (arg: any): arg is Franc => {
    return arg instanceof Franc;
}


export const isDollar = (arg: any): arg is Dollar => {
    return arg instanceof Dollar;
}

export default Dollar;
