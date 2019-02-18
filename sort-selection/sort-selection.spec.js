import { sortSelection } from './sort-selection';

describe('Sort Selection', () => {
  test('test_main', () => {
    expect(
      sortSelection(
        [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92],
      ),
    ).toEqual(
      [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643],
    );
  });

  test('test_main2', () => {
    expect(
      sortSelection([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]),
    ).toEqual(
      [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643],
    );
  });
});
