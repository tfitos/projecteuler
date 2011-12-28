
function isPrime(n){
	var m = 2;
	while ( m < n ){
		if ( n % m == 0 ){
			return false;
		}
		m++;
	}
	return true;
}


function searchPrime(n)
{
	var i = 0;
	var current = 2;
	while (true){
		if(isPrime(current)){
			i++;
			if(i == n){
				return current;
			}
		};
		current++;
	}
}

console.log("10001. prime = " + searchPrime(10001));
