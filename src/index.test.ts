import { sum } from "./func/sum";

describe("Suite", () => {
  it("should pass", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
