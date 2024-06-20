exports.sanitize=function(word){
	console.log('Running ');
	return word.toLowerCase();
} 
// add this for code coverage
exports.tokenize=function(sentence){
	return sentence.split(' ');
}