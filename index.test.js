const maxSideLenN = require(".").maxSideLenN;
const sideSum = require(".").sideSum;
const bubbleColumn = require(".").bubbleColumn;
describe("bubbleColumn", () => {
  test.each([
    
    {
      description: "3 0s at bottom",
      v: [5, 3, 0, 0, 0],
      bottom: 4,
      expected: [0, 0, 0, 5, 3],
    },
    {
      description: "1 0 2nd from bottom",
      v: [5, 3, 5, 0, 1],
      bottom: 4,
      expected: [0, 5, 3, 5, 1],
    },
  ])("$description", ({ v, bottom, expected }) => {
    bubbleColumn(v, bottom);
    expect(v).toEqual(expected);
  });
});
