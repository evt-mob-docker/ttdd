class Dollar {
    public amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number): Dollar {
        return new Dollar(multiplier * this.amount);
    }
    equals(money: Dollar): boolean {
        return this.amount === money.amount;
    }
}

export default Dollar;
