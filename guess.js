var readline = require('readline');
console.log('Im thinking of a Number between 0 and 9.');
var theNumber = Math.floor(Math.random()*10);

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt('Guess> ');
rl.prompt();

rl.on('line', function(guess) {
  	if (guess == theNumber){
		console.log('You got it!');
		rl.close();
	}
	else if (guess > theNumber) {
		console.log('too high');
	}
	else {
		console.log('too low');
	}
  rl.prompt();
}).on('close', function() {
  console.log('Have a great day!');
  process.exit(0);
});


// old stuff
/*rl.question("What is your guess? Hint, try " + theNumber + ": ", function(answer) {
	if (answer == theNumber){
		console.log('You got it!');
	}
	else if (answer > theNumber) {
		console.log('too high');
	}
	else {
		console.log('too low');
	}
  rl.close();
});

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
*/