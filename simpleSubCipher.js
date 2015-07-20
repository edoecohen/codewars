var SubstitutionCipher = function(alphabet1, alphabet2) {

	this.toEncode = {};
	this.toDecode = {};

	for (var i = 0; i < alphabet1.length; i++) {
		this.toEncode[alphabet1[i]] = alphabet2[i];
		this.toDecode[alphabet2[i]] = alphabet1[i];
	}

	this.encode = function (string) {
		var result = '';
		for (var i = 0; i < string.length; i++)	{
			if(this.toEncode[string[i]]) result += this.toEncode[string[i]];
			else result += string[i];
		}
		return result;
	}

	this.decode = function (string) {
		var result = '';
		for (var i = 0; i < string.length; i++)	{
			if(this.toDecode[string[i]]) result += this.toDecode[string[i]];
			else result += string[i];
		}
		return result;
	}

};



var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode("abc")); // => "eta"
console.log(sub.encode("xyz")); // => "qxz"
console.log(sub.encode("aeiou")); // => "eirfg"
console.log(sub.encode("t_fo&*83")); // => ""

console.log(sub.decode("eta")); // => "abc"
console.log(sub.decode("qxz")); // => "xyz"
console.log(sub.decode("eirfg"));// => "aeiou"