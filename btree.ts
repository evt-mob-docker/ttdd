export interface Key<T> {
    compareTo(o: T): number
    equals(o: T): boolean
}

export interface Record<K, V> {
    key(): K
    value(): V
}

export class SimpleRecord implements Record<IntKey, string> {
    private _key: IntKey
    private _value: string
    constructor(k: IntKey, v: string) {
        this._key = k;
        this._value = v;
    }

    key(): IntKey {
        return this._key;
    }
    value(): string {
        return this._value;
    }
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

    equals(k: IntKey): boolean {
        return this.value === k.value;
    }
}

const isIntKey = (arg: any): arg is IntKey => {
    return arg instanceof IntKey;
}