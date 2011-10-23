
function sumOfSquares(n){
	var i = 1;
	var sum = 0;
	while(i <= n){
		sum += i*i;
		i++;
	}
	return sum;
}

function squareOfSum(n){
	var i = 1;
	var sum = 0;
	while(i <= n){
		sum += i;
		i++;
	}
	return sum*sum;
}

console.log("sumOfSquares=" + sumOfSquares(100));
console.log("squareOfSum=" + squareOfSum(100));
console.log("result=" + (squareOfSum(100) - sumOfSquares(100)));
