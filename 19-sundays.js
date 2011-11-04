var util = require('util');

var monthNormal = { 1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 };
var monthLeap =   { 1: 31, 2: 29, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 };


function isLeap(year){
	return ( (year % 4 === 0) && (year % 100 !== 0) ) || (year % 400 === 0);
}

//console.log(isLeap(1700));

function howManyInYear(transformedMonths, remainingDaysUntilFirstSunday, writeout){
	var n = 0;
	if(writeout){
		console.log("transformedMonths=" + util.inspect(transformedMonths));
		console.log("remainingDaysUntilFirstSunday=" + remainingDaysUntilFirstSunday);
	}
	for(var i = 1; i<=12; i++){
		if( (transformedMonths[i] - remainingDaysUntilFirstSunday) % 7 === 0 ){
			n++;
			if(writeout){
				console.log(i);
			}
		}
	}
	var a = transformedMonths[13] - remainingDaysUntilFirstSunday;
	var b = Math.floor( a / 7);
	var c = transformedMonths[13] - ( b*7 + remainingDaysUntilFirstSunday) ;

	return {howmany: n, remainingdays: 7 - c};

}


function sum(obj, n){
	var sum = 0;
	for (var i = 1; i <= n; i++){
		sum += obj[i];
	}
	return sum;
}

function transformMonth(month){
	var ret = new Object();
	var sum = 0;
	for( var i = 1; i <= 13; i++ ){
		if(i < 13){
			ret[i] = sum + 1;
		}else{
			//if 13
			ret[i] = sum;
		}
		sum += month[i];
	}
	return ret;
}

function main(){
	var trLeap = transformMonth (monthLeap);
	var trNormal= transformMonth( monthNormal);
	var remained = 6; // last day of 1900 is monday => 6 days till sunday	
	var sum = 0;
	var res, month;
	for(var y = 1901; y < 2001; y++){
		month = isLeap(y) ? trLeap : trNormal;
		res = howManyInYear(month, remained, y === 1901);
		remained = res.remainingdays;
		sum += res.howmany;
		if(y === 1902){
			console.log("year="+y + "; remained=" + remained + "; howmany=" + res.howmany);
		}
	}
	return sum;

	//console.log(util.inspect(res));
}

//console.log(sum(monthNormal, 3));
console.log( util.inspect( transformMonth(monthNormal)  ) ); 
console.log("result=" + main());
