var bigint = require('bigint');

function fib(){
	
	var arr = [bigint('0'), bigint('1'), bigint('1')];
	var i = 3;
	while(arr[i-1].toString().length < 1000){
		arr.push(arr[i-2].add( arr[i-1] ));
		console.log(arr[i]);	
		i++;
	}
	return i-1;

}

console.log(fib());
