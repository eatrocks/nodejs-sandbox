var readline = require('readline');
console.log('Im generating 10,000 random numbers beteween 0 and 9.');

var zero=0, one=0, two=0, three=0, four=0, five=0, six=0, seven=0, eight=0, nine = 0;
for (var i = 0; i < 9999; i++) {
	var aNumber = Math.floor(Math.random()*10);
	//console.log(aNumber);
	switch (aNumber) {
		case 0:
			zero++;
			break;
		case 1:
			one++;
			break;
		case 2:
			two++;
			break;
		case 3:
			three++;
			break;
		case 4:
			four++;
			break;
		case 5:
			five++;
			break;
		case 6:
			six++;
			break;
		case 7:
			seven = seven + 1;
			break;
		case 8:
			eight++;
			break;
		case 9:
			nine++;
			break;			
	}
}
console.log(zero + ' zeros');
console.log(one + ' ones');
console.log(two +' twos');
console.log(three +' threes');
console.log(four +' fours');
console.log(five +' fives');
console.log(six+' sixs');
console.log(seven +' sevens');
console.log(eight +' eights');
console.log(nine +' nines');
