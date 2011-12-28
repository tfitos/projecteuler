
function fibonacciValues(limit) {
	var first,sec,temp,result;
	first = 1;
	sec = 2;
	result = [1];
	while (sec <= limit) {
		result.push(sec);
		temp = sec;
		sec = sec + first;
		first = temp;
	}
	return result;
}

var fibArray = fibonacciValues(4000000);
console.log(fibArray);
var i,sum=0;
for(i=0; i<fibArray.length; i++){
	if ( fibArray[i] % 2 == 0) {
		console.log(fibArray[i]);
		sum += fibArray[i];
	}	
}
console.log("sum=" + sum);
