class Dollar {
    public amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number): Dollar {
        return new Dollar(multiplier * this.amount);
    }

}

export default Dollar;
