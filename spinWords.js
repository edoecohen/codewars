function spinWords(string) {
	var result = '';

	for (var i = string.length - 1; i > 0; i--) {
		result += string[i];
	}

	return result;
}


console.log(spinWords( "Hey fellow warriors" ) ); // "Hey wollef sroirraw" 
console.log(spinWords( "This is a test") ); // "This is a test" 
console.log(spinWords( "This is another test" ) ); // "This is rehtona test"