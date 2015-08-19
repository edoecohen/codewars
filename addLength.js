// function addLength(str){
//  // declare empty results array
//   var result  = [],
//       word    = '',
//       count   = 0;

//  // loop over the string
//  for(var i=0; i < str.length; i++) {
//   if(!(/\s/.test(str[i]))) {
//     word += str[i];
//     count++;
//   }
//   if (i === str.length - 1 || (/\s/.test(str[i]))) {
//     word += ' ' + count;
//     result.push(word);
//     word  = '',
//     count = 0;
//   }
//  }

//  return result;
// };

function addLength(str){
  return str.split(' ').map(function(v){return v+' '+v.length})
}

console.log(addLength('apple ban')); // ["apple 5", "ban 3"]
console.log(addLength('you will win')); // ["you 3", "will 4", "win 3"]