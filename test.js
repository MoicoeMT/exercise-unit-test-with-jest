const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

const { fromEuroToDollar } = require('./app.js');
test("One euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

const { fromDollarToYen } = require('./app.js');
test("One euro should be 156.5 yen", () => {
    expect(fromDollarToYen(3.5)).toBe(547.75);
})

const { fromYenToPound } = require('./app.js');
test("One euro should be 0.87 pound", () => {
    expect(fromYenToPound(3.5)).toBe(3.045);
})