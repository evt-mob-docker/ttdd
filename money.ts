class Dollar {
    public amount: number;

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

export const isDollar = (arg: any): arg is Dollar => {
    return arg instanceof Dollar;
}

export default Dollar;
