var calculator = require("../string-calc");

describe("Tests for a string calculator", function() {
  it("should return a zero if passed an empty string", function() {
    expect(calculator("")).toBe(0);
  });
  it("should be able to add two numbers", function() {
    expect(calculator("10,8")).toBe(18);
  });
  it("should be able to add multiple numbers", function() {
    expect(calculator("1,2,3,4")).toBe(10);
  });
  it("should be able to handle new lines between numbers", function() {
    expect(calculator("1\n2,3")).toBe(6);
  });
  it("should support multiple delimiters", function() {
    expect(calculator("//;\n1;2")).toBe(3);
  });
  it("should ignore numbers larger than 1000", function() {
    expect(calculator("1006, 10")).toBe(10);
    expect(calculator("1006")).toBe(0);
  });

  it("should throw an error if a negative number is contained within the string to be evaluated", function() {
    expect(function() {
      calculator("-2").toThrow(new Error("negatives are not allowed, -2"));
    });
  });
  it("should be able to handle any length of delimiters", function() {
    expect(calculator("//[***]\n1***2***3")).toBe(6);
  });
  it("should allow multiple delimiters", function() {
    expect(calculator("//[*][%]\n1*2%3")).toBe(6);
  });
});
