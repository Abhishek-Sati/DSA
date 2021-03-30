const memoize = {};

const factorial = (n) => {
	if (n <= 1) return 1;
	else if (memoize[n]) return memoize[n];
	else {
		memoize[n] = n * factorial(n - 1);
		return memoize[n];
	}
};

console.log(factorial(5));

module.exports = {
	factorial,
};
