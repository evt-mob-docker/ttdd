export class S {
    protected x: number;
    constructor(x: number) {
        this.x = x;
    }
}



export class T extends S {
    private y: number;
    constructor(x: number, y: number) {
        super(x);
        this.y = y;
    }

    public calc(): number {
        return this.x * this.y;
    }

    public sum(s: S): number {
        return this.x //+ s.x;
    }

}