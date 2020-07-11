const isMoney = (arg: any): arg is Money => arg instanceof Money;

export interface Expression {

}
export class Money implements Expression {
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
        return new Money(amount, 'USD');
    }

    static franc(amount: number): Money {
        return new Money(amount, 'CHF');
    }

    times(multiplier: number): Money {
        return new Money(multiplier * this.amount, this.currencyName)
    }

    currency(): string {
        return this.currencyName;
    }

    plus(addend: Money): Expression {
        return new Money(addend.amount + this.amount, this.currencyName);
    }

}

export class Bank {
    reduce(exp: Expression, currencyName: string): Money {
        console.log(exp);
        return new Money(10, currencyName);
    }
}
