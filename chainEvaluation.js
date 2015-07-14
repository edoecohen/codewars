Number.prototype.add 				= function(val){ return this + val; };
Number.prototype.subtract 	= function(val){ return this - val; };
Number.prototype.multiply 	= function(val){ return	this * val; };
Number.prototype.divide 		= function(val){ return	this / val; }; 
Number.prototype.square 		= function () { return	this*this; }; 

console.log((3).add(5));
console.log((5).subtract(1).add(3));
console.log((3).multiply(2));
console.log((10).divide(5));
console.log((5).square());