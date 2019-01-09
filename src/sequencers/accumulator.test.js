import accumulator from "./accumulator";

describe("accumulator", ()=> {
  it("should return the sum of the accumulated values used to call it", () => {
    const ac = accumulator();
    expect(ac(1)).toBe(1);
    expect(ac(5)).toBe(6);
    expect(ac(10)).toBe(16);
  });
})
