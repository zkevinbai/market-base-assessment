function myCurry(callback, numInputs) {
    let inputs = [];

    const curryPot = (input) => {
        inputs.push(input);

        if (inputs.length === numInputs) {
            return callback(inputs)
        } else {
            return curryPot;
        }
    }

    return curryPot;
}

// const sum = function (array) {
//     return array.reduce((a, b) => a + b);
// };

// const curriedSum = myCurry(sum, 3);