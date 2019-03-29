function exponent(base, power) {
    let product = 1;

    if (power === 0) return product;

    if (power < 0) {
        for (let i = 0; i > power; i--) {
            product *= base;
        }

        return 1/product;
    } else {
        for (let i = 0; i < power; i++) {
            product *= base;
        }

        return product;
    }
}
