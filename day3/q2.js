function calculateTotal(...args) {
    console.log(args)
    return args.reduce((a, b) => a + b, 0);
    }
    console.log(calculateTotal(1, 2, 3, 4, 5))