function primeFactors(number) {
        var i;
	var result = [];
        for (i = 2; i <= number; i++) {
                if (number % i == 0) {
                        number /= i;
			result.push(i);
                        i--;
                }
        }
        return result;
}

function count(arr, number){
	var count = 0;
	for(var i = 0; i<arr.length; i++){
		if(arr[i] == number){
			count++;
		}	
	}
	return count;
}

var arr = [];
for(var i = 1; i <= 20; i++ ){
	arr.push(primeFactors(i));
	//console.log( i + "= " + primeFactors(i));
}

var j;
var primes = {};
for(var k = 0; k <= 20; k++){
	for(j = 0; j < arr.length; j++){
		if(!primes[k] || primes[k] < count(arr[j], k)){
			primes[k] = count(arr[j], k);
		}	
	}
}
console.log(primes);
var res = 1;
for(k = 0; k<=20; k++){
	res *= Math.pow(k, primes[k]);
}
console.log("res=" + res);
