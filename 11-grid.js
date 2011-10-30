var fs = require('fs');

function readLines(input, processLine, cb){
	var remaining = '';
	var res = [];
	input.on('data', function(data){
		//console.log("data=" + data);
		remaining += data;
		var index = remaining.indexOf('\n');
		while(index > -1){
			var line = remaining.substring(0, index);
			remaining = remaining.substring(index+1);
			res.push(processLine(line));
			index = remaining.indexOf('\n');
		}
		

	});
	input.on('end', function(){
		//console.log("!!end");
		cb(res);
	});

}

function out(str){
	console.log('ez=' + str);
}

function processLine(line){
	return line.split(" ");
}

function printArraysOfArrays(arr){

	for(var i = 0; i < arr.length; i++){
		if(i === 0 && i === arr.length - 1) { console.log("[[ " + arr[i] + " ]]"); }
		else if( i===0 ) { console.log("[[ " + arr[i] + " ] "); }
		else if( i===arr.length-1 ) { console.log(" [ " + arr[i] + " ]]"); }
		else { console.log(" [ " + arr[i] + " ] "); };
	}
}

function searchAndProcess4x4(arr, process)
{
	var matrix4x4;
	var arr1,arr2,arr3,arr4;
	var max = 0;
	var maxContents = [];
	for ( var i = 0; i < arr.length-3; i++){
		for ( var j = 0; j < arr[i].length-3; j++){
			arr1 = [ arr[i][j],arr[i][j+1],arr[i][j+2],arr[i][j+3] ];
			arr2 = [ arr[i+1][j],arr[i+1][j+1],arr[i+1][j+2],arr[i+1][j+3] ];
			arr3 = [ arr[i+2][j],arr[i+2][j+1],arr[i+2][j+2],arr[i+2][j+3] ];
			arr4 = [ arr[i+3][j],arr[i+3][j+1],arr[i+3][j+2],arr[i+3][j+3] ];
			matrix4x4 = [ arr1, arr2, arr3, arr4 ];
			var procResult = process(matrix4x4); //printArraysOfArrays(matrix4x4);
			var temp = procResult[0] * procResult[1] * procResult[2] * procResult[3];
			if(temp > max){
				max = temp;
				maxContents = procResult;
			}
		}	
	}
	return {max: max, maxContents: maxContents};
}

function maxIn4x4(arr){
	var max = 0;
	var maxContents = [];
	for ( var i = 0; i < 4 ; i++){
		var tempContents = [ arr[i][0], arr[i][1], arr[i][2], arr[i][3] ];
		var temp = tempContents[0] *  tempContents[1] * tempContents[2] * tempContents[3];
		if ( temp > max ){
			max = temp;
			maxContents = tempContents;
		}
	}

	for ( var i = 0; i < 4 ; i++){
		var tempContents = [ arr[0][i], arr[1][i], arr[2][i], arr[3][i] ];
		var temp = tempContents[0] *  tempContents[1] * tempContents[2] * tempContents[3];
		if ( temp > max ){
			max = temp;
			maxContents = tempContents;
		}
	}
	tempContents = [ arr[0][0], arr[1][1], arr[2][2], arr[3][3] ];
	temp = tempContents[0] *  tempContents[1] * tempContents[2] * tempContents[3];
	if ( temp > max ){
		max = temp;
		maxContents = tempContents;
	}
	tempContents = [ arr[0][3], arr[1][2], arr[2][1], arr[3][0] ];
	temp = tempContents[0] *  tempContents[1] * tempContents[2] * tempContents[3];
	if ( temp > max ){
		max = temp;
		maxContents = tempContents;
	}
	return maxContents;
}

function sAndP(arr){
	var res = searchAndProcess4x4(arr, maxIn4x4);
	console.log("max=" + res.max + "; maxContents = " + res.maxContents);
}

var input = fs.createReadStream('11-grid.txt'/*, {bufferSize: 16}*/);
readLines(input, processLine, sAndP);


