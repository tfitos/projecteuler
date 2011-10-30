
function next(n){
	if( n % 2 === 0 ){
		return n/2;
	}else{
		return 3*n + 1;
	}
}

function generate(start, next){
	var arr = [start];
	var n = start;
	while (true) { 
		var n = next(n);
		arr.push(n);
		if( n === 1){
			break;
		}
	}
	return arr;
}

console.log(generate(13, next));


function maxSearch(){
	var maxLength = 0;
	var maxIndex;
	var temp ;
	for ( var i = 2; i < 1000000;  i++){
		temp = generate(i, next).length;
		if( temp > maxLength){
			maxLength = temp;
			maxIndex = i;
			console.log("maxIndex=" + maxIndex);
		}
	}
	console.log("maxLength=" + maxLength + "; maxIndex=" + maxIndex);

}


maxSearch();
