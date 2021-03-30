const bubble_sort = (arr) => {
	if (!arr.length) return -1;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
};

const _ = [8, 7, 5, 9, 11, 6];
bubble_sort(_);
console.log(_);
