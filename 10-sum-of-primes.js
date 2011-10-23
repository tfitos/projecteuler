
function isPrime(n){
	var m = 2;
	while ( m <= Math.sqrt(n) ){
		if ( n % m == 0 ){
			return false;
		}
		m++;
	}
	return true;
}


function sumOfPrimes(n){
	console.log("sumOfPrimes until " + n);
	var sum = 0;
	for(var i = 2; i < n; i++ ){
		if(isPrime(i)){
			console.log("prime="+ i);
			sum += i;
			console.log("sum=" + sum);
		}
	}
	return sum;
}

//console.log("sumOfPrimes(10)="  + sumOfPrimes(10));
console.log("sumOfPrimes(2000000)=" + sumOfPrimes(2000000));
