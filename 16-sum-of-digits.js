

function factArray(n){
	var arr = [2];
	var tempArray;
	var temp;
	var remaining;
	for(var i = 0; i < n-1; i++){
		
		tempArray = [];
		remaining = 0;
		for(var j = arr.length - 1; j >=0; j--){
			temp = arr[j] * 2 + remaining;
			remaining = 0;
			if(temp > 9 ){
				remaining = 1;
				temp -= 10;
			}
			tempArray.splice(0,0,temp);
		}
		if(remaining !== 0 ) {
			tempArray.splice(0,0,remaining);
		}
		arr = tempArray;
		//console.log(arr);

	}
	return arr;
}

function sum(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum;
}

var arr = factArray(1000);
console.log("sum=" + sum(arr));


/*
var number = Math.pow(2,1000);
var firstdigit;
var numberStr = '';
while ( number !== 0){
	firstdigit = ("" + number)[0];
	numberStr += firstdigit;
	number /= 10;
}
console.log(numberStr);
*/
