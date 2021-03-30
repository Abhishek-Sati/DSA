const { factorial } = require("./factorial");

const ncr = (n, r) => {
	return factorial(n) / (factorial(r) * factorial(n - r));
};

console.log(ncr(10, 3));
