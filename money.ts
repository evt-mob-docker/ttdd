const isMoney = (arg: any): arg is Money => arg instanceof Money;
class Money {
    protected amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }
    equals(arg: any): boolean {
        if (isMoney(arg)) {
            return this.amount === arg.amount;
        }
        return false;
    }
}
class Dollar extends Money {

    constructor(amount: number) {
        super(amount);
    }

    times(multiplier: number): Dollar {
        return new Dollar(multiplier * this.amount);
    }

}
export class Franc extends Money {

    constructor(amount: number) {
        super(amount);
    }

    times(multiplier: number): Franc {
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
