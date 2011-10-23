
function findTheCorrectTriplet()
{
	var a,b,c;

	for(a = 1; a <= 1000; a++){
		for(b = 1; b<a; b++){
			for (c = 1; c<b; c++){
				if(a+b+c == 1000 && a*a == b*b + c*c){
					console.log("a=" + a + "; b=" + b + "; c=" + c);
				}
			}
		}		
	}


}

findTheCorrectTriplet();
