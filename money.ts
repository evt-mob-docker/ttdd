class Dollar {
    public amount: number;

    constructor(amount: number) {
        console.log(amount);
        this.amount = 10;
    }

    times(val: number) {
        console.log(val);
    }

}

export default Dollar;
