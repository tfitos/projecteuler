var fs = require('fs');

var chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function readLines(input, cb){
    var remaining = ''; 
    //var res = []; 
	var firstLine;
    input.on('data', function(data){
		//console.log('data=' + data);
        remaining += data;
        var index = remaining.indexOf('\n');
        while(index > -1){
            var line = remaining.substring(0, index);
			//console.log("line=" + line);
			if(!firstLine){
				firstLine = line;
			}
            remaining = remaining.substring(index+1);
            //res.push(parseInt(line,10));
            index = remaining.indexOf('\n');
        }   
         

    }); 
    input.on('end', function(){
        //console.log("!!end");
        cb(firstLine);
    }); 

}

function alphabetScore(word, alphabet){
	var sum = 0;
	for (var i = 0; i<word.length; i++){
		sum += alphabet.indexOf(word[i]) + 1;
	}
	return sum;
}

readLines(fs.createReadStream('22-names.txt'), function(firstLine){
	//console.log(firstLine);
	var arr = firstLine.split(',');
	var correctArr = [];
	for(var i = 0; i < arr.length; i++){
		correctArr.push(arr[i].substring(1, arr[i].length-1 ));
	}
	//console.log(correctArr[0]);
	var sorted = correctArr.sort();
	var sum = 0;
	for ( var j = 0; j<sorted.length; j++){
		sum += alphabetScore(sorted[j], chars) * (j+1);
		/*
		if( sorted[j] === "COLIN"){
			console.log(j);
		}
		*/
		console.log('after ' + j + '.=' + sum);
	}

});	
// TODO
//alphabetScore("AMERIKA",chars);
