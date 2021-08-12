class Converter {
    constructor(val, currency) {
        this.currency = currency;
        this.val = val;
    }

    convert(currency) {
        return undefined;
    }
}

const gbp = new Converter(1, "gbp");
console.log(gbp);
