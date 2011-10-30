var fs = require('fs');

function readFile(){
	var data = fs.readFileSync("18-triangle-route.txt");
	var arr = data.toString().split("\n");
	var res = [];
	for (var i = 0 ; i<arr.length; i++){
		if(arr[i] === ''){
			continue;
		}
		var partRes = arr[i].split(" ");
		res.push(partRes);
	}
	return res;

}

function routes(){
	//var route = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var route = [0,0,0];
	order(route, route.length, console.log);
}

function order(route, n, expr){
	if ( n < 1 ) { return; }
	for(var i = 1; i < n; i++ ){
		route[i] = 0;//Math.abs(route[i]-1);;
		expr(route);
		order(route, i-1, expr);
		
		route[i] = 1;
		expr(route);
		order(route, i-1, expr);
		//route[i] = 0;
	}
}

//readFile();
routes();
