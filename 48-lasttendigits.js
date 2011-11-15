var bigint = require('bigint');


function pow(num){
	var res = bigint('1');
	for(var i = 0; i < num; i++ ){
		res = res.mul(bigint("" + num));	
	}
	
	return res.toString();

	//return Math.pow(1000,1000);
}

function main(){
	var sum = bigint('0');
	for(var i = 1; i<=1000; i++){
		sum = sum.add(pow(i));
	}
	return sum;
}


console.log(main());


