// PROMPT:
// Write a function dirReduc which will take an array of strings and
// returns an array of strings with the needless directions removed
// (W<->E or S<->N side by side).


function dirReduc(arr){
  for ( var i = 0; i < arr.length; i++) {
  	if (
  		arr[i] === 'NORTH' && arr[i+1] === 'SOUTH' ||
  		arr[i] === 'SOUTH' && arr[i+1] === 'NORTH' ||
  		arr[i] === 'WEST' && arr[i+1] === 'EAST' ||
  		arr[i] === 'EAST' && arr[i+1] === 'WEST'
  		) {
  		arr.splice(i, 2);
  		dirReduc(arr);
  	}
  }
  return arr;
};

console.log(dirReduc(["NORTH", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []
