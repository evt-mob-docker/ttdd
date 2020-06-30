import { BTree } from './btree';
import { IntKey } from './btree';

test('IntKey', () => {
    describe('can be compared to each other', () => {
        const one = new IntKey(1);
        const two = new IntKey(2);
        expect(one.compareTo(two)).toBeLessThan(0);
    });
})