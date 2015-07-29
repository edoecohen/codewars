function findDuplicate(arr) {

	// Optimizing for Time
	// var results 		= {},
	// 		duplicates	= [];

	// for (var i = 0; i < arr.length; i++) {
	// 	if(results[arr[i]]) {
	// 		results[arr[i]]++;
	// 	}
	// 	else {
	// 		results[arr[i]] = 1;
	// 	}
	// }

	// for (var key in results) {
	// 	if (results[key] > 1) {
	// 		duplicates.push(key);
	// 	}
	// }

	// return duplicates;


	// Optimizing for Space
	var results = [];

	for (var i = 0; i < arr.length; i++) {
		if(arr.indexOf(arr[i]) < i) {
			results.push(arr[i]);
		}
	}

	return results;
}

var dups = [1, 2, 4, 4, 2, 5, 7, 9, 11, 12, 14, 11];
console.log(findDuplicate(dups));