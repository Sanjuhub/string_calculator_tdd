const add = require('./calculator');

test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
});

test("returns number for single number string", () => {
    expect(add("1")).toBe(1);
});

test("returns sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
});

test("returns sum of multiple numbers", () => {
    expect(add("1,2,3,4,55")).toBe(65);
});

test("returns sum of multiple numbers with new lines and commas", () => {
    expect(add("4\n2,3\n4,55")).toBe(68);
});

test("returns sum of multiple numbers with custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
});

test("returns sum of multiple numbers with custom delimiter", () => {
    expect(add("//#\n1#2#3#4#5")).toBe(15);
});

test("throws for single negative number", () => {
    expect(() => add("1,-2")).toThrow("negatives not allowed: -2");
});

test("throws for multiple negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("negatives not allowed: -2,-4");
});


