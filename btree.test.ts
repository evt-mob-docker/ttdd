import { IntKey } from './btree';

describe('IntKey', () => {
    test('can be compared to each other', () => {
        const one = new IntKey(1);
        const two = new IntKey(2);
        expect(one.compareTo(two)).toBeLessThan(0);
        expect(one.compareTo(new IntKey(1))).toBe(0);
    });
    test('has equals method', () => {
        expect(new IntKey(1).equals(new IntKey(1))).toBe(true);
        expect(new IntKey(1).equals(new IntKey(2))).toBe(false);
    });
})

// test('Record', () => {
//     const record = new Record<IntKey, string>(new IntKey(1), 'value');
//     expect(record.getKey.equals(new IntKey(1))).toBe(true));
// });