// PROMPT:
// Create a function named divisors that takes an integer and returns an array
// with all of the integer's divisors(except for 1 and the number itself).
// If the number is prime return the string '(integer) is prime' 

function divisors(val) {
	var result = [];
	for (var i = 2; i <= Math.floor(val / 2); i++ ) if ( val % i === 0 ) result.push(i);
	return result.length ? result : val + ' is prime';
}

console.log(divisors(12)); //should return [2,3,4,6]
console.log(divisors(25)); //should return [5]
console.log(divisors(13)); //should return "13 is prime"