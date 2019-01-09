import isEven from "./isEven";

describe("isEven", () => {
  it("should return an object like this: {status: false, number:1}", () => {
    const ie = isEven();
    expect(ie(2)).toEqual({status: true, number:2});
    expect(ie(3)).toEqual({status: false, number:3});
    expect(ie(999)).toEqual({status: false, number:999});
  });
})
