
var words = {

	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety",
	100: "hundred",
	1000: "one thousand"
};

function translate(n){
	if(n<21){
		return words[n];
	}else if(n < 100){
		if ( n % 10 === 0){
			return words[n];
		}else{
			return words[10*Math.floor(n/10)] + "-" + translate(Math.floor(n%10));
		}
	}else if(n <= 999){
		//console.log( n - 100 * Math.floor(n/100));
		if(n % 100 === 0){
			return words[ Math.floor ( n/100 ) ] + " hundred";
		}else{
			return words[ Math.floor( n/100 ) ] + " hundred and " + translate( n - 100 * Math.floor(n/100));
		}
	}else if(n === 1000){
		return words[n];
	}
	return 0;
}

function countLetters(str){
	var count = 0;
	for(var i = 0; i<str.length; i++){
		if(str[i] !== '-' && str[i] !== ' '){
			count++;
		}
	}
	return count;
}

function sum(n){
	var sum = 0;
	for(var i = 1; i<=n; i++){
		console.log(translate(i) + "; " + countLetters(translate(i)));
		sum += countLetters(translate(i));
	}
	return sum;
}


console.log(sum(1000));



