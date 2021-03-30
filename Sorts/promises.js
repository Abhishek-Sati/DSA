global.fetch = require("node-fetch");

const promise = () =>
	new Promise((resolve, reject) => {
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
			.then((json) => resolve(json))
			.catch((e) => reject(e));
	});

promise()
	.then((res) => {
		console.log(res);
		return res;
	})
	.then((res1) => console.log(res1))
	.catch((e) => console.log(e));
