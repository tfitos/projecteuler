

function first(){
	var curr = 1;
	var add = 0;
	var sum = 0;

	for(var i = 0; i<1001; i++){
		add = i*2;
		curr += add;
		sum += curr;
		//console.log(curr);
	}
	//console.log(sum);
	return sum;
}

function second(){

	var curr = 1;
	var add = 0;
	var sum = 0;

	for(var i = 0; i<1001; i++){
		if(i%2 === 1){
			add += 4;
		}
		curr += add;
		sum += curr;
		//console.log(curr);
	}
	return sum;
	//console.log(sum);
}




function generateSpiralPoints(){
	var res = [1];
	var add = 1;
	var last = 1;

	for(var i = 1; i <= 2000; i++){
		if(i%4 === 1){
			add+=2;
		}
		last += add;
		res.push(last);		
	}

	return res;
}

function sumFirstTriangle(arr){
	var sum = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(i%2 === 1){
			sum += arr[i];
		}
	}
	return sum;
}

function sumSecondTriangle(arr){
	var sum = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(i%2 === 0){
			sum += arr[i];
		}
	}
	return sum;
}

//console.log(generateSpiralPoints());

//var arr = generateSpiralPoints();
//var result = sumFirstTriangle(arr) + sumSecondTriangle(arr);
//console.log("Result= " + result);

console.log(first() + second() - 1);
