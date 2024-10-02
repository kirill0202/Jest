import {
  mocks_data,
  MocksDataType,
  result_mocks_data,
} from "./__mocks__/mocks";
import { filterArray } from "./filterArray";

describe("filterArray tests", () => {
  const cb = jest.fn();
  it("should not invoke callback when an array is empty", () => {
    // mock function
    filterArray([], cb);

    expect(cb).not.toHaveBeenCalled();
  });
  it("should invoke callback function for each element in the array", () => {
    const array = [1, 2, 3];

    filterArray(array, cb);

    expect(cb).toHaveBeenCalledTimes(array.length);
  });
  it("should filter an array", () => {
    const hasPrice = ({ price }: MocksDataType) => price > 100;
    const result = filterArray(mocks_data, hasPrice);
    expect(result).toEqual(result_mocks_data);
  });
});
