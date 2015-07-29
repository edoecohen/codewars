function lookAndSay(data,len){
  // Populate result list with the look and say numbers
  // data:  starting number set
  // len:   sequence length
  
  var result 		= [],
  		count 		= 0,
  		sayNumber = '';
	
	for (var i = 0; i < data.length; i++) {
		count++;
		if( data[i+1] && data[i] !== data[i + 1] || !data[i+1]) {
			sayNumber += count + data[i];
			count = 0;
		}
	}
	
	result.push(sayNumber);

	if(len > 1) {
		result = result.concat(lookAndSay(sayNumber, len-1)); 
	}

  return result;

}

console.log(lookAndSay('1',5)); // ['11','21','1211','111221','312211']
console.log(lookAndSay('1259',5)); // ['11121519', '311211151119', '13211231153119', '1113122112132115132119', '31131122211211131221151113122119']