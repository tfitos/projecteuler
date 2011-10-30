var bigint = require('bigint');



function factor(n){
	console.log('factor=' + n);
	if(n.gt(1)){
		return n.mul(factor(n.sub(1)));
	}
	return bigint('1');
}

function digits(n,length){
	var res = [];
	for(var i = 0; i<length; i++){
		n = n%10;
		console.log(n);
		//console.log(n);
		res.push ((""+n)[0]);

	}
	return res;
}

// f is bigint
function sumDigits(f){
	var s = f.toString();
	var sum = 0;
	for(var i = 0; i < s.length; i++){
		sum += parseInt(s[i]);
	}
	return sum;
}


var f = factor(bigint('100'));
console.log(f);
console.log(sumDigits(f));

//console.log(digits(f,5));
//digits(f,200);

