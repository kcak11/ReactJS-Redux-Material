define(function(){ 
	var sum = function(x, y){ 
		return x + y;
	} 
	var sub = function(x, y){
	 return x - y; 
	} 
	var math = { 
		findSum: function(a, b){
			return sum(a,b);
			 }, 
		findSub: function(a, b){
	 return sub(a, b); 
	} 
}
return math; 
});

//All the variable we want to expose outside needs to be 
//property of "exports" object. 

//exports.math = math;

// create main.js file and load it with require.js
//no file extension required
 var math = require("./math").math; 
 console.log(math.findSum(1, 2)); //3 
 console.log(math.findSub(1, 2)); //-1
//Here we successfully prevented any chances of overriding


/*

<!doctype html>
 <html> 
 <head>
 </head>
  <body> 
  <!-- Load RequireJS library and then provide relative path to our
   website's JS file. File extension not required. --> 
   <script type="text/javascript" 
   src="http://requirejs.org/docs/release/2.1.16/minified/require.js"
   data-main="index.js">
   </script>
    </body> 
    </html>

    */

  // create index.js
  //list of modules required 
  require(["math"], function(math){
   //main program
   console.log(math.findSum(1, 2)); 
   //3 
   console.log(math.findSub(1, 2)); //-1
    })