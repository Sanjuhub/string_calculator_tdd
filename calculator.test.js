const add = require('./calculator');

test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
});
