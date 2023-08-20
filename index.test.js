const maxSideLenN = require(".").maxSideLenN;
const sideSum = require(".").sideSum;
const bubbleColumn = require(".").bubbleColumn;
describe("bubbleColumn", () => {
  test.each([
    {
      description: "3 0s at bottom",
      v: [5, 3, 0, 0, 0],
      expected: [0, 0, 0, 5, 3],
    },
    {
      description: "1 0 2nd from bottom",
      v: [5, 3, 5, 0, 1],
      expected: [0, 5, 3, 5, 1],
    },
    {
      description: "multiple pockets of 0s",
      v: [0, 3, 0, 4, 4, 0, 0, 8, 9, 0, 1],
      expected: [0, 0, 0, 0, 0, 3, 4, 4, 8, 9, 1],
    },
  ])("$description", ({ v, expected }) => {
    bubbleColumn(v);
    expect(v).toEqual(expected);
  });
});
