var fs = require('fs');

function readLines(input, cb){
    var remaining = ''; 
    var res = []; 
    input.on('data', function(data){
        //console.log("data=" + data);
        remaining += data;
        var index = remaining.indexOf('\n');
        while(index > -1){
            var line = remaining.substring(0, index);
            remaining = remaining.substring(index+1);
            res.push(parseInt(line,10));
            index = remaining.indexOf('\n');
        }   
     

    }); 
    input.on('end', function(){
        //console.log("!!end");
        cb(res);
    }); 

}

readLines(fs.createReadStream('13-bigsum.txt'), function(res){
	var sum = 0;
	for(var i = 0; i < res.length; i++){
		sum += res[i];
	}
	
	console.log("RES=" + sum);
});
