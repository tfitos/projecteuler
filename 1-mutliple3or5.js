
function isMultiple3or5(number){
	return (number % 5 == 0 || number % 3 == 0);
}

function multiples3or5(n){
	var i,sum;
	sum = 0;
	for(i=1;i<n;i++){
		if(isMultiple3or5(i)){
			console.log(i);
			sum += i;
		}
	}
	console.log("sum = " + sum);
}

multiples3or5(1000);

