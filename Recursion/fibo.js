const memo = {};

const fibo = function (n) {
	if (n <= 2) return n - 1;
	else if (memo[n]) return memo[n];
	else {
		memo[n] = fibo(n - 2) + fibo(n - 1);
		return memo[n];
	}
};
console.log(fibo(50));
