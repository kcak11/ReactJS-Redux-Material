//Module Starts 
(function(window){
 var sum = function(x, y){
  return x + y; 
} 
var sub = function(x, y){ 
	return x - y; } 
var math = { 
	findSum: function(a, b){ 
		return sum(a,b); 
	}, 
	findSub: function(a, b){ 
			return sub(a, b); 
		} 
	} 
window.math = math;
})(window);
 //Module Ends 

console.log(math.findSum(1, 2)); //3
console.log(math.findSub(1, 2)); //-1