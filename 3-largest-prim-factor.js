
function largestPrimeFactor(number) {
	var i;

	for (i = 2; i <= number; i++) {
		if (number % i == 0) {
			number /= i;
			i--;
		}
	}

	return i;
}

console.log("largestPrimeFactor(600851475143)=" + largestPrimeFactor(600851475143));

