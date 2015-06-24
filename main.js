//=========== < TRIPLE FIVE > ===========//

//var tripleFive = function() {
//	for(i = 0 ; i < 3 ; i++) {
//		console.log("Five!");
//	}
//}
//
//tripleFive()


//=========== < LAST LETTER > ===========//
var lastLetter = function(){

	var word = prompt("Enter a single word:"); 
	var wordLength = word.length

	return word[wordLength-1]

}

console.log(lastLetter());