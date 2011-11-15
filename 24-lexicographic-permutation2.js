
var start = [0,1,2,3,4,5,6,7,8,9];

function swap(arr,i1,i2){
    var elem1 = arr[i1];
    var elem2 = arr[i2];
    arr.splice(i2,1,elem1);
    arr.splice(i1,1,elem2);
    return arr;
}

function indexNotMonotoneIncFromRight(arr){
	var val = arr[arr.length - 1];
	for(var i = arr.length - 2; i >= 0; i--){
		if(arr[i] < val){
			return i;
		}else{
			val = arr[i];
		}
	}
	return -1;
}

function min(arr, index, value){
	var min = 100000;
	var minPos = index + 1;
	for(var i = index + 1; i < arr.length; i++){
		if(min > arr[i] && arr[i] > value){
			min = arr[i];
			minPos = i;
		} 
	}
	return minPos;
}

function sort(arr,after){
    var first = after + 1;
    var last = arr.length - 1;
    while( last !== first ){
        var newlast = first;
        for ( var i = first+1; i<=last; i++){
            if(arr[i-1] > arr[i]){
                swap(arr,i-1,i);
                newlast = i;
            }
        }
        last = newlast;
    }
    return arr;
}

function main(){
	
	var index = 8;
	var arr = start;
	var step = 1;
	while(index != -1 && step <= 1000000){
		
		console.log("" + step + ". step=" + arr);
		
		var rightMinIndex = min(arr, index, arr[index]);
		arr = swap(arr, index, rightMinIndex);
		
		arr = sort(arr, index);

		index = indexNotMonotoneIncFromRight(arr);
		step++;
	}
}

//console.log(indexNotMonotoneIncFromRight(start));
main();
