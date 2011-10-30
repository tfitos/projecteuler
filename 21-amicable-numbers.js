var util = require('util');


function divisors(n){
	var res = [];
	for(var i=1; i<n; i++){
		if( n % i === 0){
			res.push(i);
		}
	}
	return res;
}

function sum(arr){
	var sum = 0;
	for (var i = 0; i<arr.length; i++){
		sum += arr[i];
	}
	return sum;
}

function generate(n){
	var res = [];
	// fake wrong values
	res.push({n: 0, m: 100});
	res.push({n: 1, m: 100});
	for(var i=2; i<n; i++){
		res.push ( {n: i, m: sum(divisors(i))} );
	}
	console.log( util.inspect( res ) );
	return res;
}

function isAmicable(n,arr,limit){
	//console.log("isAmicable; n=" + n + "; limit= " + limit);
	var lookFor = arr[n].m;
	if (lookFor === n){
		return false;
	}
	if(n === 6 ) { console.log("n===6; lookFor=" + lookFor); }
	if(lookFor < limit){
		try{
			return n === arr[lookFor].m;
		}catch(e){
			console.log("ERROR");
			console.log("lookFor=" + lookFor);
			console.log("n=" + n);
			//console.log("m=" + m);
			throw e;
		}
	}else{
		return n === sum(divisors(lookFor));
	}

}

function sumOfAmicableNumbers(limit){

	var arr = generate(limit);
	//console.log("arr[0]=" + util.inspect(arr[0]));
	var sum = 0;
	for(var i = 0; i<arr.length; i++){
		//console.log("i="+i);
		if(isAmicable(arr[i].n, arr, limit)){
			console.log("amicable=" + arr[i].n);	
			sum+= arr[i].n;
		}
	}
	return sum;
}

//console.log(sum(divisors(220)));
//console.log(sum(divisors(284)));
//console.log(generate(10000));
//var arr = generate(1000);
//console.log(isAmicable(220,arr,1000));
//console.log(isAmicable(284,arr,1000));

console.log(sumOfAmicableNumbers(10000));


