function iqTest(numbers){
  var arr = numbers.split(" ");
  var odd = arr.filter( function(val) { return val % 2 === 1});
  var even = arr.filter( function(val) { return val % 2 === 0});
  
  return odd.length < even.length ? (arr.indexOf(odd[0]) + 1) : (arr.indexOf(even[0]) + 1);
}

console.log(iqTest("2 4 7 8 10")); // 3
console.log(iqTest("1 2 2")); // 1