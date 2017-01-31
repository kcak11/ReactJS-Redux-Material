export class Math {
 constructor() { 
 	this.sum = function(x, y){ 
 		return x + y; 
 	}
    this.sub = function(x, y){
     return x - y; 
   }
  } 
  findSum(a, b) {
  	return this.sum(a, b); 
  } 
  findSub(a, b) { 
  	return this.sub(a, b); 
  } 
}

// now to consume module
import {Math} from 'math'; 
var math = new Math();
console.log(math.findSum(1, 2)); //3 
console.log(math.findSub(1, 2)); //-1