const Converter = require("./converter");

test("Simple smoke test 1", () => {
    const gbp = new Converter(1, "gbp");
    expect(gbp.val).toBe(1);
});

test("Simple smoke test 2", () => {
    const gbp = new Converter(1, "gbp");
    expect(gbp.currency).toBe("gbp");
});
