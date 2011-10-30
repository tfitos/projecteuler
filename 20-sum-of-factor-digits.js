var bi = require('./BigInt.js');



function factor(n){
	if(n > 1){
		return n * factor(n-1);
	}
	return 1
}

console.log(factor(100));
