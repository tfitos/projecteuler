var numbers = "75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 " +
			  "41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 " +
			  "17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 " + 
			  "27 23 09 70 98 73 93 38 53 60 04 23";

var nums = numbers.split(" ");


function summarize(nums, index, step, waysum){
	var left = {way: [], sum: 0};
	var right = {way: [], sum: 0};
	var partsum = parseInt(waysum.sum,10);
	
	partsum += parseInt(nums[index]);

	if(hasLeftChild(nums,index,step)){
		left = summarize(nums,leftChild(index,step),step+1,waysum);
	}
	if(hasRightChild(nums,index,step)){
		right = summarize(nums,rightChild(index,step),step+1,waysum);	
	}
	//console.log("nums[" + index + "]=" + nums[index] + "; left=" + left + "; right=" + right);
	if(left.sum > right.sum){
		var newarr = left.way.length > 0 ? left.way.slice(0) : [];
		newarr.push(parseInt(nums[index],10));
		return {way: newarr, sum: left.sum + partsum};
	}else{
		var newarr = right.way.length > 0 ? right.way.slice(0) : [];
		newarr.push(parseInt(nums[index],10));
		return {way: newarr, sum: right.sum + partsum};
	}
}

var n = [0,1,3,6,10,15,21];

function hasLeftChild(nums,index,step){
	return nums.length  > ( index + step + 1); 
}

function hasRightChild(nums,index,step){
	return nums.length > (index + step + 2);
}

function leftChild(index, step){
	return index + step + 1;
}

function rightChild(index, step){
	return index + step + 2;
}

function parseNumbers(nums){
	var res = [];
	for(var i = 0; i<nums.length; i++){
		res.push(parseInt(nums[i],10));
	}
	return nums;
}

//console.log(parseInt("04",10));

//console.log(parseNumbers(nums));
console.log(summarize(parseNumbers(nums),0,0,{way: [], sum:0}));


