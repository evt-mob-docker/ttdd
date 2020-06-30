export interface Key<T> {
    compareTo(o: T): number
}
// export type Key = number;
export class IntKey implements Key<IntKey>{
    private value: number;
    constructor(value: number) {
        this.value = value;
    }

    compareTo(k: IntKey): number {
        if (isIntKey(k)) {
            return this.value - k.value;
        }
        throw Error(`cannot be compared to ${k}`);
    }
}

const isIntKey = (arg: any): arg is IntKey => {
    return arg instanceof IntKey;
}