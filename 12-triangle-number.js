
function triangleNumbers(n){
	var res = [0];
	
	for (var i = 1; i <= n; i++){
		res[i] = res[i-1] + i;
	}

	return res;//.splice(1);

}

function divisors(n){
	//var res = [];
	var num = 0;
	var sqrt = Math.sqrt(n);
	for ( var i = 1; i < sqrt; i++ ){
		if( n % i === 0 ){
			num++;
		}
	}
	num *= 2;
	if( sqrt == Math.floor(sqrt) ){
		num++;
	}
	return num;
}

var numbers = triangleNumbers(1000000); 

console.log(numbers[12375] + " divisors = " + divisors(numbers[12375]));
//return;

//console.log(numbers);
for( var i = 1; i < numbers.length; i++){
	if(divisors(numbers[i]) >= 500){
		console.log("RESULT=" + i);
		return;
	}
}
