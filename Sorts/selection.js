function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

const selection_sort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let smallest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[smallest]) smallest = j;
		}
		if (smallest !== i) swap(arr, i, smallest);
	}
};

const _ = [8, 7, 5, 9, 11, 6, -2, 6];
selection_sort(_);
console.log(_);
