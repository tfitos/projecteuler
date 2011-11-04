function divisors(num){
	var res = [];
	for (var i = 1; i < Math.floor(num / 2) + 1; i++){
		if (num % i === 0){
			res.push(i);
		}
	}
	return res;
}


function isAbundant(num){
	var divs = divisors(num);
	var s = sum(divs);
	if(s > num){
		return true;
	}
	return false;
}

function abundants(){
	var res = [];
	for ( var i = 0; i <= 28123; i++){
		if(isAbundant(i)){
			console.log("i=" + i);
			res.push(i);
		}
	}
	return res;
}

function notSumsOfTwoAbundants(abundants){
	var o = new Object();
	var p;
	var res = [];
	for (var i = 0; i < abundants.length; i++){
		console.log("sumsOfTwoAbundants; i="+i);
		for(var j = 0; j < abundants.length; j++){
			p = abundants[i] + abundants[j];
			o[p] = true;
		}		
	}
	
	for (var k = 1; k <= 28123; k++){
		console.log("notSumCheck; k=" + k);
		if(!o[k]){
			res.push(k);
		}
	}
	return res;
}

function sum(arr){
	var sum = 0;
	for(var i = 0; i<arr.length; i++){
		sum += arr[i];
	}
	return sum;
}

var abund = abundants();
var notSum = notSumsOfTwoAbundants(abund);
var su = sum(notSum);
console.log(su);

