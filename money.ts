class Dollar {
    public amount: number;
    private initialAmount: number;

    constructor(amount: number) {
        this.initialAmount = amount;
        this.amount = amount;
    }

    times(multiplier: number) {
        this.amount = multiplier * this.initialAmount;
    }

}

export default Dollar;
