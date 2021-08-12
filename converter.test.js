const Converter = require("./converter");

test("Simple smoke test", () => {
    const gbp = new Converter(1, "gbp");
    expect(gbp.val).toBe(1);
});
