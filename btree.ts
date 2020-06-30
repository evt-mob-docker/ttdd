export interface Key {
    compareTo(o: Key): number
    equals(o: Key): boolean
}

export class Record<K extends Key, V> {
    private _key: K
    private _value: V
    constructor(key: K, value: V) {
        this._key = key;
        this._value = value;
    }
    key(): K {
        return this._key;
    }
    value(): V {
        return this._value;
    }
}
export class IntKey implements Key {
    private value: number;
    constructor(value: number) {
        this.value = value;
    }

    compareTo(k: IntKey): number {
        return this.value - k.value;
    }

    equals(k: IntKey): boolean {
        return this.value === k.value;
    }
}