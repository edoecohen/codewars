function calculateOptimalFare(D, T, V1, R, V2) {
  var result 			= 	0,
  		walkTime 		= 	(T * V2 - 60 * D) / (V2 - V1),
  		taxiTime 		= 	T - walkTime,
  		taxiPrice 	= 	(V1 / 60 * taxiTime * R).toLocaleString('en', { minimumFractionDigits: 2 } );

	return taxiPrice > 0 ? taxiPrice : "Won't make it!";

}


console.log(calculateOptimalFare(8, 10, 90, 2, 6));
console.log(calculateOptimalFare(100, 10, 500, 5, 25));