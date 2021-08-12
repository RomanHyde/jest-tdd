const Converter = require("./converter");

test("Simple smoke test 1", () => {
    const gbp = new Converter(1, "gbp");
    expect(gbp.val).toBe(1);
});

test("Simple smoke test 2", () => {
    const gbp = new Converter(1, "gbp");
    expect(gbp.currency).toBe("gbp");
});
test("test if a decimal", () => {
    const gbp = new Converter(1.5, "gbp");
    expect(gbp.val).toBe(1.5);
});

test("to assert it IS gbp", () => {
    const gbp = new Converter(1, "gbp");
    expect(gbp.currency).not.toBe("usd");
});
