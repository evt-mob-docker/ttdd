class Dollar {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number): Dollar {
        return new Dollar(multiplier * this.amount);
    }
    equals(arg: any): boolean {
        if (isDollar(arg)) {
            return this.amount === arg.amount;
        }
        console.log(arg);
        return false;
    }
}
export class Franc {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number): Franc {
        return new Franc(multiplier * this.amount);
    }
    equals(arg: any): boolean {
        if (isFranc(arg)) {
            return this.amount === arg.amount;
        }
        console.log(arg);
        return false;
    }
}

const isFranc = (arg: any): arg is Franc => {
    return arg instanceof Franc;
}

export const isDollar = (arg: any): arg is Dollar => {
    return arg instanceof Dollar;
}

export default Dollar;
