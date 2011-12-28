
function reverse(n){
	return parseInt((''+n).split('').reverse().join("") , 10);
}

function findLargestPalindrome(){
	var i = 999;
	var j;
	var arr = [];
	var arr2 = [];
	var t;
	while(i >= 100){
		j=999;
		while(j >= 100){
			t = i*j;
			//console.log(t);
			if(t == reverse(t)){
				arr.push(t);
				arr2.push("" + i + "*" + j);					
			}
			j--;
		}
		i--;
	}
	var k;
	var max = -1;
	var maxSource;
	for(k=0; k< arr.length; k++){
		if(max < arr[k]){
			max = arr[k];
			maxSource = arr2[k];
		}
	}
	//console.log(arr);
	console.log("max=" + max);
	console.log("maxSource=" + maxSource);
}

//console.log("reverse(123456789)=" + reverse(123456789));

findLargestPalindrome();

